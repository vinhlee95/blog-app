import { FETCH_POST, FETCH_SINGLE_POST } from '../actions/types';
import _ from 'lodash';

export default (state={}, action) => {
   switch(action.type) {
   case FETCH_POST:
      return _.mapKeys(action.payload.data, 'id');
      // return an array of objects: [id: {id:, categories:, content: }]

   case FETCH_SINGLE_POST:
      return {...state, [action.payload.data.id]: action.payload.data }

   default:
      return state;
   }
}