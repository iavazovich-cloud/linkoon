import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold gradient-text">404</h1>
        <p className="text-xl text-muted">Oops! Page not found</p>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 px-6 py-3 btn-gradient rounded-full font-semibold hover:shadow-lg transition-all"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
