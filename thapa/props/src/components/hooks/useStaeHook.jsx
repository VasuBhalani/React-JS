import { useState } from "react";
export const UseStateHook = () => {
    // var count=0;
    const [count,setCount] = useState(0);
    console.log(useState(0));
    console.log(setCount);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    );
};

// #Why React?
// - It's because those are normal variables and React.js doesn't know that it's going to
// be changed.
// And that react should respond or update DOM based on that.
// Those values are already rendered on DOM, there is no way they will be re-rendered.
// - For that React.js provides a function called "useState"
// - This type of function which starts with "use" is called hook.
// - This is a special function which has some features provided by react.js
// - we will learn about other hooks in future.