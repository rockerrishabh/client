import { createLazyFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { usePost } from "../hooks/usePost";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const { posts, fetchPosts, error, loading } = usePost();
  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) return <pre>Loading...</pre>;
  if (error) return <pre>{error}</pre>;

  return <div>{posts && <p>{JSON.stringify(posts)}</p>}</div>;
}
