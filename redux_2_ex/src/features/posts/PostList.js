import { useSelector ,useDispatch } from "react-redux";
import { selectAllPosts,getPostsStatus,getPostsError ,fetchPosts} from "./postsSlice";
import PostAuthor from "./PostAuthor";
import React, { useEffect } from "react";

// import {useEffect} from from 'react';

import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";


const PostList = () => {
  const dispatch=useDispatch();

  const posts = useSelector(selectAllPosts);
  const postsStatus= useSelector(getPostsStatus);
  const error= useSelector(getPostsError);

  const orderedPosts = posts.slice().sort((a,b)=> b.date.localeCompare(a.date))

  const renderedPosts = orderedPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId}/>
        <TimeAgo timestamp={post.date}/>
      </p>
      <ReactionButton post={post}/>
    </article>
  ));
  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostList;
