import React, { Component } from 'react';


class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {inputvalue: ''};
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
    }


  render(){
    return (
      <div class="search-bar">
        <input placeholder={this.state.inputvalue} onChange={ event => this.onInputChange(event.target.value)}/>
        <button type="button" class="btn btn-primary"  >Search</button>
      </div>
    );
  }
};


export default SearchBar;
