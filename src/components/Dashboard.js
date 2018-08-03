import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pet from './Pet';
import { fetchCat, adoptCat } from '../actions/cat-actions';
import { fetchDog, adoptDog } from '../actions/dog-actions';

import '../dashboard.css';

class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCat());
    this.props.dispatch(fetchDog());
  }

  onAdoptCat() {
    this.props.dispatch(adoptCat());
  }
  onAdoptDog() {
    this.props.dispatch(adoptDog());
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to A.J.'s Adpot-A-Pet</h1>
        </header>
        <Pet pet={this.props.catToAdopt} onAdoptPet={() => this.onAdoptCat()} />
        <Pet pet={this.props.dogToAdopt} onAdoptPet={() => this.onAdoptDog()} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  catToAdopt: state.catReducer.data,
  dogToAdopt: state.dogReducer.data
});

export default connect(mapStateToProps)(Dashboard);
