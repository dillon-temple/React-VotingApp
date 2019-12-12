import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      counter: 0
    }
  }

  render(){
      return (
        <div className="container">
          <div className="counter">{this.state.counter}</div>
          <div className="framework">{this.props.framework}</div>
          <button
            className="button"
            onClick={() => this.setState((previous) => ({
              excitement: previous.counter++
            }))}
          >
            Click Me!
          </button>
        </div>
      );
  }

}

// const App = (props) => {
//   return (
//     <div className="container">
//       <div className="counter">34</div>
//       <div className="framework">{props.framework}</div>
//       <button className="button" onClick={() => alert("You clicked " + props.framework + "!")}>Click Me!</button>
//     </div>
//   );
// }

export default App;