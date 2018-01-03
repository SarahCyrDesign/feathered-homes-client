import { combineReducers } from 'redux';
import { birdsHasErrored, birdsIsLoading, birds } from './manageBirds';

export default combineReducers({
    birdsHasErrored,
    birdsIsLoading,
    birds
});
