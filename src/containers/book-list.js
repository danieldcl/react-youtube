import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/select-book';
import { bindActionCreators } from 'redux';

class BookList extends Component{

  render(){
    const bl = this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          class="list-group-item"
          onClick={() => this.props.selectBook(book)}>
          {book.title}
        </li>
      );
    });
    return (
      <ul className="list-group col-sm-4">
        {bl}
      </ul>
    )
  }
}


function mapStateToProps(state) {
  // Whatever returned will will be turned into props for this component
  return {
    books: state.books
  }
}

function mapDispatchToProps(dispatch){
  // Whenever selectBook is called, the result should be passed to all our reducers
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
