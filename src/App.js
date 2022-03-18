import ReactGA from 'react-ga4';
/* eslint-disable react/jsx-filename-extension */
import logo from './logo.svg';
import './App.css';

const TRACKING_ID = 'UA-223167131-1'; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lets do some tests!!!
        </a>
      </header>
    </div>
  );
}

export default App;
