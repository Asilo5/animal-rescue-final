import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
   let wrapper;
   let mocklistedAnimals = [
     {id: 1, name:'bob', species:'who knows', description:'who cares'}
   ];
   let mockDonations = [
     {name: 'bob', donation: 0}
   ]

   beforeEach(() => {
     wrapper = shallow(<App  
        listedAnimals={mocklistedAnimals}
        receivedDonations={mocklistedAnimals}
     />)
   })

   it('should match snapshot with all tests passing through correctly', () => {
     expect(wrapper).toMatchSnapshot();
   })

})
