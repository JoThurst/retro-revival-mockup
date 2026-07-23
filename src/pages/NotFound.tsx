import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-[100svh] items-center justify-center bg-background px-6">
      <div className="text-center">
        <p className="brand text-5xl text-[hsl(var(--brand))]">404</p>
        <h1 className="display mt-4 text-3xl">Page not found</h1>
        <p className="mt-3 text-muted-foreground">That screen doesn’t exist in this arcade.</p>
        <a href="/" className="btn-brand mt-8 inline-flex">
          Back to Cruzn Retro
        </a>
      </div>
    </div>
  );
};

export default NotFound;
