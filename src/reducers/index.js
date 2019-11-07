import { combineReducers } from 'redux';
import { rescuedAnimals } from './listedAnimalsReducer';


const rootReducer = combineReducers({
    rescuedAnimals
});

export default rootReducer;