https://chatgpt.com/share/6784ef5b-be34-8008-a545-4b88fcedf36e

hook is used to propagate changes of state in UI 

normal var can change in console.log but not in UI 

when state is change its method is call and UI rerender (but not normal var)

Why Regular Variable Updates Don’t Work
When you update a regular variable in React, the component does not re-render. React’s rendering system is declarative, meaning it only updates the UI when the state or props change.
```javascript
let counter = 0;

const increment = () => {
  counter += 1;
  console.log(counter); // Logs the correct value to the console
};

return (
  <>
    <h2>Count: {counter}</h2> {/* UI won't update */}
    <button onClick={increment}>Add</button>
  </>
);
```
In this case:

Updating counter changes the value in memory.
However, React has no way of knowing that it needs to re-render the component because there’s no signal (like a state change) to tell React that something has changed.

What useState Does Behind the Scenes
useState is a React Hook that allows React to keep track of changes in the state and trigger a re-render of the component whenever the state changes.

Here’s what happens behind the scenes:

1. State Storage: React maintains an internal state storage mechanism. Each component has its own isolated state, stored in an internal "state queue."

When you call:
```javascript
const [counter, setCounter] = useState(0);
```
React initializes a counter value in its internal state system.

2. State Update: When you call setCounter:
```javascript
setCounter(counter + 1);
```
React:

Adds the new value to the internal state queue.
Schedules the component to re-render with the updated state.
Re-render: During the next render cycle:

React fetches the updated state from its internal storage.
Re-executes the component function to generate the updated JSX based on the new state.
Updates the DOM to reflect the new UI.

Why console.log(counter) Shows Old Value
The state update is asynchronous. When you call setCounter, React schedules the update but does not apply it immediately. So, the console.log(counter) will still show the old value.