import React from "react"
import './App.css';
import ReactDOM from 'react-dom';
import VideoDownloader from './VideoDownloader';

const App = () => {

  return (
    <div>
      <h1>Video Download Example</h1>
      <VideoDownloader />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));



export default App;
