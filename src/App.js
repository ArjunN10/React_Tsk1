
import './App.css';
import Greet from './component/Greet';
import Home from './component/Home';
import Clsscomponent from './component/Clsscomponent';
import Create from './jsx/Create';
import { useState } from 'react';


function App() {
  const [count,setCount]=useState(0);

  return (
    <div className="App">


    <Greet />
    <Home/>
    <hr/><br/>
    <Home/>
<Clsscomponent />

<Create />


<h3>-------Create a counter-------</h3>
<br/>

<button onClick={()=>setCount(count+1)}>+</button>
      <p>{count}</p>
      <button onClick={()=>setCount(count-1)}>-</button>

<br/>


</div>

  );
}

export default App;
