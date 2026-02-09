-- Create blog comments table with likes and replies support
CREATE TABLE public.blog_comments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    blog_slug TEXT NOT NULL,
    parent_id UUID REFERENCES public.blog_comments(id) ON DELETE CASCADE,
    author_name TEXT NOT NULL,
    content TEXT NOT NULL,
    likes_count INTEGER NOT NULL DEFAULT 0,
    dislikes_count INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create comment votes table to track who voted
CREATE TABLE public.blog_comment_votes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    comment_id UUID REFERENCES public.blog_comments(id) ON DELETE CASCADE NOT NULL,
    voter_fingerprint TEXT NOT NULL, -- anonymous voting using fingerprint
    vote_type TEXT NOT NULL CHECK (vote_type IN ('like', 'dislike')),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE(comment_id, voter_fingerprint)
);

-- Enable RLS
ALTER TABLE public.blog_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_comment_votes ENABLE ROW LEVEL SECURITY;

-- RLS policies for blog_comments (public read, public insert)
CREATE POLICY "Anyone can read comments"
ON public.blog_comments
FOR SELECT
USING (true);

CREATE POLICY "Anyone can create comments"
ON public.blog_comments
FOR INSERT
WITH CHECK (true);

-- RLS policies for blog_comment_votes
CREATE POLICY "Anyone can read votes"
ON public.blog_comment_votes
FOR SELECT
USING (true);

CREATE POLICY "Anyone can create votes"
ON public.blog_comment_votes
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Anyone can update their votes"
ON public.blog_comment_votes
FOR UPDATE
USING (true);

CREATE POLICY "Anyone can delete their votes"
ON public.blog_comment_votes
FOR DELETE
USING (true);

-- Create function to update comment vote counts
CREATE OR REPLACE FUNCTION public.update_comment_vote_counts()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        IF NEW.vote_type = 'like' THEN
            UPDATE public.blog_comments SET likes_count = likes_count + 1 WHERE id = NEW.comment_id;
        ELSE
            UPDATE public.blog_comments SET dislikes_count = dislikes_count + 1 WHERE id = NEW.comment_id;
        END IF;
        RETURN NEW;
    ELSIF TG_OP = 'DELETE' THEN
        IF OLD.vote_type = 'like' THEN
            UPDATE public.blog_comments SET likes_count = GREATEST(0, likes_count - 1) WHERE id = OLD.comment_id;
        ELSE
            UPDATE public.blog_comments SET dislikes_count = GREATEST(0, dislikes_count - 1) WHERE id = OLD.comment_id;
        END IF;
        RETURN OLD;
    ELSIF TG_OP = 'UPDATE' AND OLD.vote_type != NEW.vote_type THEN
        IF NEW.vote_type = 'like' THEN
            UPDATE public.blog_comments SET likes_count = likes_count + 1, dislikes_count = GREATEST(0, dislikes_count - 1) WHERE id = NEW.comment_id;
        ELSE
            UPDATE public.blog_comments SET dislikes_count = dislikes_count + 1, likes_count = GREATEST(0, likes_count - 1) WHERE id = NEW.comment_id;
        END IF;
        RETURN NEW;
    END IF;
    RETURN NULL;
END;
$$;

-- Create trigger for vote counts
CREATE TRIGGER update_comment_votes_trigger
AFTER INSERT OR UPDATE OR DELETE ON public.blog_comment_votes
FOR EACH ROW
EXECUTE FUNCTION public.update_comment_vote_counts();

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION public.update_blog_comment_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_blog_comments_updated_at
BEFORE UPDATE ON public.blog_comments
FOR EACH ROW
EXECUTE FUNCTION public.update_blog_comment_updated_at();