import { useState } from "react";
import { Post, PostProviderContext } from "../contexts/PostContext";

type PostProviderProps = {
  children: React.ReactNode;
};

export function PostProvider({ children }: PostProviderProps) {
  const [post, setPost] = useState<Post | undefined>();
  const [posts, setPosts] = useState<Post[] | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const fetchPost = async (id: string) => {
    setLoading(true);
    setError(undefined);
    try {
      const res = await fetch(`/api/posts/${id}`, {
        method: "Get",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (res.ok) {
        setPost(data as Post);
      } else {
        setError((data as { error: string }).error);
      }
    } catch (error) {
      setError(`Something went wrong while fetching Post with id: ${id}`);
    } finally {
      setLoading(false);
    }
  };

  const fetchPosts = async () => {
    setLoading(true);
    setError(undefined);
    try {
      const res = await fetch("/api/posts", {
        method: "Get",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      if (res.ok) {
        console.log(data);
        setPosts(data as Post[]);
      } else {
        setError((data as { error: string }).error);
      }
    } catch (error) {
      setError("Something went wrong while fetching Posts");
    } finally {
      setLoading(false);
    }
  };

  const value = {
    post,
    posts,
    loading,
    error,
    fetchPost,
    fetchPosts,
  };

  return (
    <PostProviderContext.Provider value={value}>
      {children}
    </PostProviderContext.Provider>
  );
}
