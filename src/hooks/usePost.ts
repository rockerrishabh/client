import { useContext } from "react";
import { PostProviderContext } from "../contexts/PostContext";

export const usePost = () => {
  const context = useContext(PostProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
