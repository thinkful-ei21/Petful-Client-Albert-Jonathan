import React, { Component } from 'react';

import Pet from './Pet';

import '../App.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catToAdopt: '',
      dogToAdopt: ''
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to A.J.'s Adpot-A-Pet</h1>
        </header>
        <p className="App-intro">To get started, add code under the hood :).</p>
        <Pet petType={this.state.catToAdopt} />
        <Pet petType={this.state.dogToAdopt} />
      </div>
    );
  }
}

export default Dashboard;
