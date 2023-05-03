import React from "react";
import { useSelector } from "react-redux";
import { selectedAllPosts } from "./PostSlice";

const PostList = () => {
    const posts = useSelector(selectedAllPosts)

    const renderingPosts=posts.map((post)=>{
      return(<article key={post.id}>
        <p>{post.title}</p>
        <p>{post.content}</p>
      </article>)
    })
  return <div>{renderingPosts}</div>;
};

export default PostList;
