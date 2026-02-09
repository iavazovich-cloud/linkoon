import { useState, useEffect } from 'react';
import { ThumbsUp, ThumbsDown, MessageCircle, Send, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { useLanguage } from '@/contexts/LanguageContext';

interface Comment {
  id: string;
  blog_slug: string;
  parent_id: string | null;
  author_name: string;
  content: string;
  likes_count: number;
  dislikes_count: number;
  created_at: string;
  replies?: Comment[];
}

interface BlogCommentsProps {
  blogSlug: string;
}

// Generate a simple fingerprint for anonymous voting
const getVoterFingerprint = (): string => {
  let fingerprint = localStorage.getItem('voter_fingerprint');
  if (!fingerprint) {
    fingerprint = Math.random().toString(36).substring(2) + Date.now().toString(36);
    localStorage.setItem('voter_fingerprint', fingerprint);
  }
  return fingerprint;
};

export const BlogComments = ({ blogSlug }: BlogCommentsProps) => {
  const { language } = useLanguage();
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [authorName, setAuthorName] = useState('');
  const [commentContent, setCommentContent] = useState('');
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState('');
  const [replyAuthorName, setReplyAuthorName] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [userVotes, setUserVotes] = useState<Record<string, 'like' | 'dislike'>>({});

  const translations = {
    en: {
      comments: 'Comments',
      writeComment: 'Write a comment...',
      yourName: 'Your name',
      send: 'Send',
      reply: 'Reply',
      writeReply: 'Write a reply...',
      noComments: 'No comments yet. Be the first to comment!',
      justNow: 'Just now',
      minutesAgo: 'minutes ago',
      hoursAgo: 'hours ago',
      daysAgo: 'days ago'
    },
    uz: {
      comments: 'Izohlar',
      writeComment: 'Izoh yozing...',
      yourName: 'Ismingiz',
      send: 'Yuborish',
      reply: 'Javob',
      writeReply: 'Javob yozing...',
      noComments: 'Hali izohlar yo\'q. Birinchi bo\'ling!',
      justNow: 'Hozirgina',
      minutesAgo: 'daqiqa oldin',
      hoursAgo: 'soat oldin',
      daysAgo: 'kun oldin'
    },
    ru: {
      comments: 'Комментарии',
      writeComment: 'Напишите комментарий...',
      yourName: 'Ваше имя',
      send: 'Отправить',
      reply: 'Ответить',
      writeReply: 'Напишите ответ...',
      noComments: 'Комментариев пока нет. Будьте первым!',
      justNow: 'Только что',
      minutesAgo: 'минут назад',
      hoursAgo: 'часов назад',
      daysAgo: 'дней назад'
    }
  };

  const t = translations[language as keyof typeof translations] || translations.uz;

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return t.justNow;
    if (diffMins < 60) return `${diffMins} ${t.minutesAgo}`;
    if (diffHours < 24) return `${diffHours} ${t.hoursAgo}`;
    return `${diffDays} ${t.daysAgo}`;
  };

  const fetchComments = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_comments')
        .select('*')
        .eq('blog_slug', blogSlug)
        .order('created_at', { ascending: false });

      if (error) throw error;

      // Organize comments into parent-child structure
      const parentComments: Comment[] = [];
      const childComments: Record<string, Comment[]> = {};

      (data || []).forEach((comment: Comment) => {
        if (comment.parent_id) {
          if (!childComments[comment.parent_id]) {
            childComments[comment.parent_id] = [];
          }
          childComments[comment.parent_id].push(comment);
        } else {
          parentComments.push(comment);
        }
      });

      // Attach replies to parent comments
      parentComments.forEach(comment => {
        comment.replies = childComments[comment.id] || [];
      });

      setComments(parentComments);

      // Fetch user's votes
      const fingerprint = getVoterFingerprint();
      const { data: votesData } = await supabase
        .from('blog_comment_votes')
        .select('comment_id, vote_type')
        .eq('voter_fingerprint', fingerprint);

      if (votesData) {
        const votes: Record<string, 'like' | 'dislike'> = {};
        votesData.forEach((vote: { comment_id: string; vote_type: string }) => {
          votes[vote.comment_id] = vote.vote_type as 'like' | 'dislike';
        });
        setUserVotes(votes);
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [blogSlug]);

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !commentContent.trim()) return;

    setSubmitting(true);
    try {
      const { error } = await supabase
        .from('blog_comments')
        .insert({
          blog_slug: blogSlug,
          author_name: authorName.trim(),
          content: commentContent.trim()
        });

      if (error) throw error;

      setCommentContent('');
      fetchComments();
    } catch (error) {
      console.error('Error submitting comment:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleSubmitReply = async (parentId: string) => {
    if (!replyAuthorName.trim() || !replyContent.trim()) return;

    setSubmitting(true);
    try {
      const { error } = await supabase
        .from('blog_comments')
        .insert({
          blog_slug: blogSlug,
          parent_id: parentId,
          author_name: replyAuthorName.trim(),
          content: replyContent.trim()
        });

      if (error) throw error;

      setReplyingTo(null);
      setReplyContent('');
      setReplyAuthorName('');
      fetchComments();
    } catch (error) {
      console.error('Error submitting reply:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleVote = async (commentId: string, voteType: 'like' | 'dislike') => {
    const fingerprint = getVoterFingerprint();
    const currentVote = userVotes[commentId];

    try {
      if (currentVote === voteType) {
        // Remove vote
        await supabase
          .from('blog_comment_votes')
          .delete()
          .eq('comment_id', commentId)
          .eq('voter_fingerprint', fingerprint);

        setUserVotes(prev => {
          const newVotes = { ...prev };
          delete newVotes[commentId];
          return newVotes;
        });
      } else if (currentVote) {
        // Change vote
        await supabase
          .from('blog_comment_votes')
          .update({ vote_type: voteType })
          .eq('comment_id', commentId)
          .eq('voter_fingerprint', fingerprint);

        setUserVotes(prev => ({ ...prev, [commentId]: voteType }));
      } else {
        // New vote
        await supabase
          .from('blog_comment_votes')
          .insert({
            comment_id: commentId,
            voter_fingerprint: fingerprint,
            vote_type: voteType
          });

        setUserVotes(prev => ({ ...prev, [commentId]: voteType }));
      }

      fetchComments();
    } catch (error) {
      console.error('Error voting:', error);
    }
  };

  const CommentItem = ({ comment, isReply = false }: { comment: Comment; isReply?: boolean }) => (
    <div className={`${isReply ? 'ml-8 pl-4 border-l-2 border-border' : ''}`}>
      <div className="bg-card rounded-xl p-4 mb-3">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="font-medium text-sm">{comment.author_name}</p>
            <p className="text-xs text-muted-foreground">{formatTimeAgo(comment.created_at)}</p>
          </div>
        </div>
        
        <p className="text-sm text-foreground/90 mb-3 whitespace-pre-wrap">{comment.content}</p>
        
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleVote(comment.id, 'like')}
            className={`flex items-center gap-1.5 text-sm transition-colors ${
              userVotes[comment.id] === 'like' 
                ? 'text-primary' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <ThumbsUp className="w-4 h-4" />
            <span>{comment.likes_count}</span>
          </button>
          
          <button
            onClick={() => handleVote(comment.id, 'dislike')}
            className={`flex items-center gap-1.5 text-sm transition-colors ${
              userVotes[comment.id] === 'dislike' 
                ? 'text-destructive' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <ThumbsDown className="w-4 h-4" />
            <span>{comment.dislikes_count}</span>
          </button>
          
          {!isReply && (
            <button
              onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.reply}</span>
            </button>
          )}
        </div>

        {/* Reply Form */}
        {replyingTo === comment.id && (
          <div className="mt-4 space-y-3">
            <Input
              placeholder={t.yourName}
              value={replyAuthorName}
              onChange={(e) => setReplyAuthorName(e.target.value)}
              className="text-sm"
            />
            <Textarea
              placeholder={t.writeReply}
              value={replyContent}
              onChange={(e) => setReplyContent(e.target.value)}
              className="text-sm min-h-[80px]"
            />
            <Button
              size="sm"
              onClick={() => handleSubmitReply(comment.id)}
              disabled={submitting || !replyContent.trim() || !replyAuthorName.trim()}
            >
              <Send className="w-4 h-4 mr-2" />
              {t.send}
            </Button>
          </div>
        )}
      </div>

      {/* Replies */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="space-y-2">
          {comment.replies.map(reply => (
            <CommentItem key={reply.id} comment={reply} isReply />
          ))}
        </div>
      )}
    </div>
  );

  if (loading) {
    return (
      <div className="mt-16 animate-pulse">
        <div className="h-8 bg-muted rounded w-32 mb-6" />
        <div className="space-y-4">
          <div className="h-24 bg-muted rounded-xl" />
          <div className="h-24 bg-muted rounded-xl" />
        </div>
      </div>
    );
  }

  return (
    <div className="mt-16 border-t border-border pt-8">
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <MessageCircle className="w-6 h-6" />
        {t.comments} ({comments.reduce((acc, c) => acc + 1 + (c.replies?.length || 0), 0)})
      </h3>

      {/* New Comment Form */}
      <form onSubmit={handleSubmitComment} className="mb-8 space-y-4">
        <Input
          placeholder={t.yourName}
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
        />
        <Textarea
          placeholder={t.writeComment}
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
          className="min-h-[100px]"
        />
        <Button 
          type="submit" 
          disabled={submitting || !commentContent.trim() || !authorName.trim()}
        >
          <Send className="w-4 h-4 mr-2" />
          {t.send}
        </Button>
      </form>

      {/* Comments List */}
      {comments.length === 0 ? (
        <p className="text-center text-muted-foreground py-8">{t.noComments}</p>
      ) : (
        <div className="space-y-4">
          {comments.map(comment => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
      )}
    </div>
  );
};
