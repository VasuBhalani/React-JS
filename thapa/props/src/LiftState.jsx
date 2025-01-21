import { useState } from "react";
import './components/EventHandling/Event.css';
export const LiftingState = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
    <div className="container">
    <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
    <DisplayComponent inputValue={inputValue} />
    </div>
      
    </>
  );
};

// Here concept is like we are create one state for inputComponent it just store user input now in displyComponent we are display that value and for that we need to access of inpucomponent state in display component 
// that is done by lifting state : - we pass state in parent component and from that we are access in display component

const InputComponent = ({ inputValue, setInputValue }) => {
  return (
    <>
    <h1>Input Component</h1>
        <input
        type="text"
        placeholder="Enter your name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        ></input>
    </>
  );
};

const DisplayComponent = ({ inputValue }) => {
  return <h4>The current input value is: {inputValue} </h4>;
};