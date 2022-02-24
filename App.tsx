import React from 'react';
// import logo from './logo.svg';
import './App.css';
export const App = ()=>{
  return(
<div className='traffic-light'>
  <input type="radio" readOnly className='light red' />
  <input type="radio" readOnly className='light yellow' />
  <input type="radio" readOnly className='light  green' />
  <button>Next</button>
</div>
  );
};
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
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
