import React, { useCallback } from "react";
import { Button, FlatList, Text, View } from "react-native";
import { Post } from "../components/Post";
import { usePostsFeed } from "../hooks/usePostsFeed";

const PostsFeed = () => {
  const { addPost, posts, totalCount } = usePostsFeed();

  const renderPost = useCallback(({ item }: any) => {
    return <Post {...item} />;
  }, []);

  return (
    <>
      <View>
        <>
          <Button
            title="Create new post"
            onPress={() => addPost(`Post Content`)}
          />
          <Text>{`Total Posts: ${totalCount}`}</Text>
        </>
        <FlatList
          style={{ marginBottom: 100 }}
          renderItem={renderPost}
          data={posts}
          extraData={posts}
        />
      </View>
    </>
  );
};

export default PostsFeed;
