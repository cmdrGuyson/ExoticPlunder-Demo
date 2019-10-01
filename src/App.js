import React, {Component} from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import VideoList from "./components/VideoList";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <VideoList />
      </div>
    );
  }
}

export default App;
