import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
      combineReducers({
          dishes: Dishes,
          comments: Comments,
          promotions: Promotions,
          leaders: Leaders
      }),
      applyMiddleware(thunk, logger)

    );

    return store;
}





// import {createStore} from 'redux';
// import { Reducer, initialState } from './reducer';
//
// export const ConfigureStore = () => {
//     const store = createStore(
//         Reducer, // reducer
//         initialState, // our initialState
//     );
//
//     return store;
// }

//Reducer
// import { DISHES } from '../shared/dishes';
// import { COMMENTS } from '../shared/comments';
// import { PROMOTIONS } from '../shared/promotions';
// import { LEADERS } from '../shared/leaders';
//
// export const initialState = {
//     dishes: DISHES,
//     comments: COMMENTS,
//     promotions: PROMOTIONS,
//     leaders: LEADERS
// };
//
// export const Reducer = (state = initialState, action) => {
//     return state;
// };
