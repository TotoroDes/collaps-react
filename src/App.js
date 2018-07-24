import React, { Component } from 'react';
import './App.css';
import Collapsible from 'react-collapsible';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Accordion</h1>
        </header>
          <Collapsible trigger="There is the first block">
          <p>This is the collapsible content. It can be any element or React component you like.</p>
      </Collapsible>
      <Collapsible trigger="There is the second block">
          <p>This is the collapsible content. It can be any element or React component you like.</p>
      </Collapsible>
      <Collapsible trigger="There is the third block">
          <p>This is the collapsible content. It can be any element or React component you like.</p>
      </Collapsible>
      </div>
    );
  }
}

export default App;
