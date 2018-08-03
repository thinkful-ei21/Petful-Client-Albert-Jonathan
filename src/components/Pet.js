import React, { Component } from 'react';

class Pet extends Component {
  render() {
    if (!this.props.pet) {
      return <div>Loading</div>;
    }
    return (
      <div>
        <header>
          <img src={this.props.pet.imageURL} alt="this is an img" />
          <h2> {this.props.pet.name} </h2>
        </header>
        <main>
          <dl>
            <dt>
              <span>Sex:</span> {this.props.pet.sex}
            </dt>
            <dt>
              <span> Age:</span> {this.props.pet.age}
            </dt>
            <dt>
              <span>Breed:</span> {this.props.pet.breed}
            </dt>
            <dt>
              <span> Story:</span> {this.props.pet.story}
            </dt>
          </dl>
          <button onClick={this.props.onAdoptPet}>Adopt</button>
        </main>
      </div>
    );
  }
}

export default Pet;
