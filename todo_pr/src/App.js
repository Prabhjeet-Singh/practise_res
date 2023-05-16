import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './components/postSlice';

function App() {
  const post=useSelector((state)=>state.post.value)
  const Dispatch=useDispatch()
  return (
    <div className="App" style={{background:'black',color:'white',height:"100vh"}}>
      <button type="button" onClick={()=>Dispatch(decrement())}>decrement</button>
     <span>{post}</span>
      <button type="button" onClick={()=>Dispatch(increment())}>increment</button>
    </div>
  );
}

export default App;
