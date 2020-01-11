import './App.css';
import React, { Component } from 'react'
import Phone from './components/Phone';
import PhoneList from './components/PhoneList';



export default class App extends Component {
  render() {
    return (
      <div>
        <Phone>
        </Phone>
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Phone Catalogue
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
