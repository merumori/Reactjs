import './App.css';
import React, { useState } from 'react';


 function App(props) {
  let [count, setCount] = useState(0);
  const numbers = [1, 2, , 6, 8, 34, 66];
  //console.log(numbers);

  const Increment = () => setCount(count + 1);
  const Decrement = () => setCount(count - 1);
  const submit = () => setCount(0);
  const reset= () => setCount(0);

  for (let i = 0; i <= numbers.length; i++) {
    console.log(i);
  }
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={Increment}>+</button>{' '}
      <button onClick={Decrement}>-</button>{' '}
      <button onClick={reset}>reset</button>
      <button onClick={submit}>submit</button>
    </div>
  );
}



export default App;
