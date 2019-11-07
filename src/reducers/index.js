import { combineReducers } from 'redux';
import { rescuedAnimals } from './listedAnimalsReducer';
import { donations } from './donationsReducer';

const rootReducer = combineReducers({
    rescuedAnimals,
    donations
});

export default rootReducer;