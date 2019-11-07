import React, { Component } from 'react';
import { getAnimals, getDonations } from '../../apiCalls';
import { listedAnimals, receivedDonations } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Animals } from '../Animals/Animals';

export class App extends Component {
  async componentDidMount() {
      try {
          const resp = await getAnimals();
          console.log(resp)
          this.props.listedAnimals(resp);
          this.appendDonations();
      } catch(error) {
          console.log('Error getting animals', error);
      }
  } 
  
  appendDonations = async () => {
    try {
        const resp = await getDonations();
        this.props.receivedDonations(resp);
    } catch(error) {
        console.log('Error getting donations', error);
    }
  }

  render() {
    return (
        <main>
          <Animals />
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
