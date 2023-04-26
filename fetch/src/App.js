import './App.css';
import axios from 'axios';
import {  useState } from 'react';

function App() {
  const [joke,setJoke]=useState('');
  const [punchline,setPunchline]=useState('');
  const [num,setnum]=useState(0);
  const fetchData = () =>{
  axios.get("https://official-joke-api.appspot.com/random_joke").then((res)=>{
   setJoke(res.data.setup);
   setPunchline(res.data.punchline);
   setnum(num+1);
  });
  }
  
  return (
  <>
<p>hello world</p>
<button onClick={fetchData}>want joke</button>
<h2>{joke}</h2>
<h2>{punchline}</h2>
<h3>{num}</h3>
  </>

  );
}

export default App;
