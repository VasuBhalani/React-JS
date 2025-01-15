import './App.css'
import {useState} from 'react';

function App() {
  const [counter, setCount] = useState(0);  // hooks are manage to propogate the state value in UI
  const addValue = () =>{
    console.log('Add Value')
    // counter += 1;
    setCount(counter + 1);
    console.log(counter)
  }
  
  const removeValue = () =>{
    console.log('Remove Value')
    // counter -= 1;
    setCount(counter - 1);
    console.log(counter)
  }
  
    
  return (
    <>
     <h1>Counter App</h1>
     <h2>Count : {counter}</h2>

     <button onClick={addValue}>Add</button>
     <br/>
     <br/>
      <button onClick={removeValue}>Subtract</button>
    </>
  )
}

export default App
