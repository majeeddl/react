import { useState } from 'react'
import logo from './logo.svg'
import './App.css'


 class App extends Component {
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>React Class components</p>
            <p>
              <button type="button" onClick={() => setCount((count) => count + 1)}>
                count is: {count}
              </button>
            </p>
            <p>
              Edit <code>App.jsx</code> and save to test HMR updates.
            </p>
           
          </header>
        </div>
      )
    }
 }
// function App() {
//   const [count, setCount] = useState(0)

  
//   )
// }

export default App
