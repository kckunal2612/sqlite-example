import { useCallback, useEffect, useState } from "react";
import { createNewPostInDb, getAllPostsFromDb } from "../db/postsDbManager";
import { Post } from "../types/posts";

const usePostsFeed = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [totalCount, setTotalCount] = useState(0);

  const loadPosts = useCallback(async () => {
    const posts = await getAllPostsFromDb();
    setPosts(posts as any);
    setTotalCount(posts?.length);
  }, []);

  useEffect(() => {
    loadPosts();
  }, []);

  const createNewPost = async (textContent: string) => {
    await createNewPostInDb(textContent);
    setTimeout(() => {
      loadPosts();
    }, 500);
  };

  return { totalCount, addPost: createNewPost, posts };
};

export { usePostsFeed };
