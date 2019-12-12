import React from 'react';
import './App.css';



const App = (props) => {
  return (
    <div className="container">
      <div className="counter">34</div>
      <div className="framework">{props.framework}</div>
      <button className="button" onClick={() => alert("You clicked " + props.framework + "!")}>Click Me!</button>
    </div>
  );
}

export default App;