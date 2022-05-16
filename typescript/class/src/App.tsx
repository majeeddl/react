import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component<any> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>React Class Component with Typescript</p>
          <p>
            {/* <button
              type="button"
              onClick={() => setCount((count) => count + 1)}
            >
              count is: {count}
            </button> */}
          </p>
        </header>
      </div>
    );
  }
}
// const App = ()=> {
//   const [count, setCount] = useState(0)

// }

export default App;
