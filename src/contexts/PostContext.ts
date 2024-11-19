import { createContext } from "react";

export type Post = {
  id: string;
  title: string;
  body: string;
  published: string;
  user_id: string;
  created_at: Date;
  updated_at: Date | null;
};

type PostProviderState = {
  post: Post | undefined;
  posts: Post[] | undefined;
  error: string | undefined;
  loading: boolean;
  fetchPost: (id: string) => Promise<void>;
  fetchPosts: () => Promise<void>;
};

const initialState: PostProviderState = {
  post: undefined,
  posts: undefined,
  error: undefined,
  loading: false,
  fetchPost: async () => {},
  fetchPosts: async () => {},
};

export const PostProviderContext =
  createContext<PostProviderState>(initialState);
