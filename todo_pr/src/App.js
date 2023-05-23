import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded ,showAllPosts} from "./features/posts/postsSlice";

function App() {
  const posts=useSelector(showAllPosts);
  const dispatch=useDispatch()
  const [title,setTitle]=useState('');
  const [content,setContent]=useState('');

  const onTitleChange=(e)=>{setTitle(e.target.value)}
  const onContentChange=(e)=>{setContent(e.target.value)}

  const onSave=()=>{
    if(title&&content){
      dispatch(
        postAdded({
        id:nanoid(),
        title,
        content
        })
      )
      setTitle('');
      setContent("");
    }
  }



  const renderedPosts=posts.map((post)=>{
    return(
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </article>
    );
  })
  return(<>
  <section>
    <h2>Posts</h2>
    {renderedPosts}
  </section>
  <form>
    <input type="text" name="title" value={title} onChange={onTitleChange}/>
    <textarea type="text" name="title" value={content} onChange={onContentChange}></textarea>
    <button type="button" onClick={onSave}>Save</button>
  </form>
    </>
  );
}

export default App;
