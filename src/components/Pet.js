import React, { Component } from 'react';

class Pet extends Component {
  render() {
    return (
      <div>
        <header>
          <img alt="this is an img" />
          <h2> NAME </h2>
        </header>
        <main>
          <dl>
            <dt>
              <span>Sex:</span> Male
            </dt>
            <dt>
              <span> Age:</span> 1
            </dt>
            <dt>
              <span>Breed:</span> Tabby
            </dt>
            <dt>
              <span> Story:</span> Wild Jungle Cat
            </dt>
          </dl>
          <button>Adopt</button>
        </main>
      </div>
    );
  }
}

export default Pet;
