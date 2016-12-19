import { combineReducers } from 'redux';
import Books from './books';
import ActiveBook from './active-book';

export default combineReducers({
  books: Books,
  activeBook: ActiveBook
});
