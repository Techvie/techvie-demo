import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from './Post';
import Allpost from './Allposts';
function App() {
  return (
    <div className="App">
      <Post/>
      <hr></hr>
      <Allpost/>
    </div>
  );
}

export default App;
