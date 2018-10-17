import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DisplayQueriedList from './displayQueriedList.jsx';
import { queryManyCards } from '../../../helperFunctions/clientHelperFunctions/helper.js'; 

export default class DropDownSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleDropDown : false,
      searchValue : null,
      searchResults : [],
      toggleDisplayList: false
    };
    this.toggle = this.toggle.bind(this);
    this.onChange = this.onChange.bind(this);
    this.searchDB = this.searchDB.bind(this);
    this.toggleDisplayList = this.toggleDisplayList.bind(this);
  }

  toggleDisplayList(e) {
    this.setState({
      toggleDisplayList : !this.state.toggleDisplayList
    });

    e.preventDefault();
  }

  searchDB(e) {
    let searchValue = this.state.searchValue;

    let promise = new Promise(resolve => {
      let search = queryManyCards(searchValue);
      resolve(search);
    }).then(result => {
      this.setState({
        searchResults : result.data,
        toggleDisplayList : !this.state.toggleDisplayList
      }, () => {
        console.log('this dasds', this.state)
      });
    })
    e.preventDefault();
  }

  toggle() {
    this.setState({
      toggleDropDown : !this.state.toggleDropDown
    });
  }

  onChange(e) {
    this.setState({
      searchValue : e.target.value
    });

    e.preventDefault();
  }

  render() {
    return (
      <div id="drop-down-search">
        <Dialog open={this.state.toggleDisplayList} onClose={this.toggleDisplayList}> 
          <DisplayQueriedList state={this.state} toggle={this.toggleDisplayList} save={this.props.save}/>
        </Dialog>
        <div className="open-close">
          <a id="open-close-button" onClick={this.toggle}>Search Card</a>
        </div>
          {this.state.toggleDropDown ? 
          (
            <div id="dropdown-search-container">
              <form id="card-to-db-form">
                <input 
                  id="search-value" 
                  id="card-addition"
                  form="card-to-db-form"
                  placeholder="Enter Name"
                  onChange={this.onChange}>
                </input>
                <input type="submit" value="Search" onClick={this.searchDB}/>
              </form>
            </div>
          ) : (
                null
              )
        }
      </div>
    )
  }
};