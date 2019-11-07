import React, { Component } from 'react';
import { getAnimals, getDonations } from '../../apiCalls';

class App extends Component {
  async componentDidMount() {
      try {
          const resp = await getAnimals;

          this.appendDonations()
      } catch(error) {
          console.log('Error getting animals', error);
      }
  } 
  
  appendDonations = async () => {
    try {
        const resp = await getDonations;
      
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

export default App;
