import { combineReducers } from 'redux';
import { rescuedAnimals } from './listedAnimalsReducer';
import { donations } from './donationsReducer';
import { isLoaded } from './isLoadingReducer';
import { errorMsg } from './hasErrorReducer';

const rootReducer = combineReducers({
    rescuedAnimals,
    donations,
    isLoaded,
    errorMsg
});

export default rootReducer;