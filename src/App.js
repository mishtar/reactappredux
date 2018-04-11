import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import PostList from './components/PostList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Blog Post Populares</h1>
        </header>
        <div className="container">
          <hr />
          <PostList />
        </div>
      </div>
    );
  }
}

export default App;
