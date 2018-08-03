import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pet from './Pet';
import { fetchCat, adoptCat } from '../actions/cat-actions';
import { fetchDog, adoptDog } from '../actions/dog-actions';

import '../styles/dashboard.css';

class Dashboard extends Component {
  componentDidMount() {
    console.log('huh?');
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
      <section className="dashboard">
        <header className="dashboard-header">
          <h1 className="dashboard-title">Welcome to A.J.'s Adpot-A-Pet</h1>
        </header>
        <main className="dashboard-main">
          <Pet
            pet={this.props.catToAdopt}
            onAdoptPet={() => this.onAdoptCat()}
            loading={this.props.loadingCat}
            error={this.props.errorCats}
            animalType={'cats'}
          />
          <Pet
            pet={this.props.dogToAdopt}
            onAdoptPet={() => this.onAdoptDog()}
            loading={this.props.loadingDog}
            error={this.props.errorDogs}
            animalType={'dogs'}
          />
        </main>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  catToAdopt: state.catReducer.data,
  errorCats: state.catReducer.error,
  loadingCat: state.catReducer.loading,
  dogToAdopt: state.dogReducer.data,
  errorDogs: state.dogReducer.error,
  loadingDog: state.dogReducer.loading
});

export default connect(mapStateToProps)(Dashboard);
