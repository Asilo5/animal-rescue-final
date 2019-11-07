import React, { Component } from 'react';
import { getAnimals, getDonations } from '../../apiCalls';
import { listedAnimals, receivedDonations } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class App extends Component {
  async componentDidMount() {
      try {
          const resp = await getAnimals;
          this.props.listedAnimals(resp);
          this.appendDonations()
      } catch(error) {
          console.log('Error getting animals', error);
      }
  } 
  
  appendDonations = async () => {
    try {
        const resp = await getDonations;
        this.props.receivedDonations(resp);
    } catch(error) {
        console.log('Error getting donations', error);
    }
  }

  render() {
    return (
        <main>

        </main>
    )
  }
}

export const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        listedAnimals, 
        receivedDonations
    }, dispatch)
  );

export default connect(null, mapDispatchToProps)(App);
