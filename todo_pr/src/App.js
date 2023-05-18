import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { postAdded } from './components/postSlice';
import { useState } from 'react';

function App() {
  const todo=useSelector((state)=>state.post)
  const dispatch=useDispatch()

  const [text,setText]=useState('')
  
  const onSubmit=()=>({
  if(text){
    dispatch(postAdded(text))
    setText('')
  }
  })



  return (
    <div className="App" style={{background:'black',color:'white',height:"100vh"}}>
    
      <form >
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        <button type="button" onClick={()=>dispatch(onSubmit())}>Save</button>
        
      </form>
      <span>{todo.map((todo=><p key={todo.id}>{todo.text}</p>))}</span>
    </div>
  );
}

export default App;
