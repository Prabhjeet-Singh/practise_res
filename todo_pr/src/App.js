import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment,onSubmit } from './components/postSlice';

function App() {
  const post=useSelector((state)=>state.post.value)
  const todo=useSelector((state)=>state.post.todo)
  const dispatch=useDispatch()

  const handleSubmit=(e)=>({
    e.preventDefault()

  })
  return (
    <div className="App" style={{background:'black',color:'white',height:"100vh"}}>
      <button type="button" onClick={()=>dispatch(decrement())}>decrement</button>
     <span>{post}</span>
      <button type="button" onClick={()=>dispatch(increment())}>increment</button>
      <form onSubmit={handleSubmit}>
        <input type="input" onSubmit={()=>dispatch(onSubmit())} />
        
      </form>
      <span>{todo}</span>
    </div>
  );
}

export default App;
