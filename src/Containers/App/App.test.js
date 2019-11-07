import React from 'react';
import App, { mapDispatchToProps } from './App';
import { shallow } from 'enzyme';
import { listedAnimals, receivedDonations } from '../../actions';
import { getAnimals, getDonations } from '../../apiCalls';

jest.mock('../../apiCalls');

describe('App', () => {

  describe('App tests', () => {
    let wrapper;
    let mocklistedAnimals = [
      {id: 1, name:'bob', species:'who knows', description:'who cares'}
    ];
    let mockDonations = [
      {name: 'bob', donation: 0}
    ];
 
    beforeEach(() => {
      wrapper = shallow(<App  
         listedAnimals={mocklistedAnimals}
         receivedDonations={mockDonations}
      />)
    })
 
    it('should match snapshot with all tests passing through correctly', () => {
      expect(wrapper).toMatchSnapshot();
    })
  })
  
   describe('mapDispatchToProps',  () => {
      let mockDispatch = jest.fn();
      let mocklistedAnimals = [
        {id: 1, name:'bob', species:'who knows', description:'who cares'}
      ];
      let mockDonations = [
        {name: 'bob', donation: 0}
      ];

      getAnimals.mockImplementation(() => {
        return Promise.resolve(mocklistedAnimals);
      })

      getDonations.mockImplementation(() => {
        return Promise.resolve(mockDonations);
      })

      it('should dispatch listedAnimals when component', () => {
        const actionToDispatch = listedAnimals(mocklistedAnimals);
        const mappedProps = mapDispatchToProps(mockDispatch);

        mappedProps.listedAnimals(mocklistedAnimals);
        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
      })

      it('should dispatch receivedDonations when component', () => {
        const actionToDispatch = receivedDonations(mockDonations);
        const mappedProps = mapDispatchToProps(mockDispatch);

        mappedProps.receivedDonations(mockDonations);
        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
      })
       
     })
})
