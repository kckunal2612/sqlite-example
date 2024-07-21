import React from "react";
import { Text, View } from "react-native";
import { Post as PostType } from "../types/posts";

export function Post(props: PostType) {
  return (
    <View
      style={{ flex: 1, borderColor: "black", borderWidth: 1 }}
      key={props?.id}
    >
      <Text>{props?.id}</Text>
      <Text>{props?.value}</Text>
    </View>
  );
}
