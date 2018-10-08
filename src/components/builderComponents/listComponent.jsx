import React from 'react';
import List from './list.jsx';

import Dialog from '@material-ui/core/Dialog'
import Modal from './modal.jsx'

class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleModal : false
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(e) {
    this.setState({
      toggleModal: !this.state.toggleModal
    });
    e.preventDefault();
  }

  render() {
    let cardList = this.props.deckList.deckList;
    
    return (
      <div>
        <Dialog open={this.state.toggleModal} onClose={this.handleToggle}>
          <Modal toggle={this.handleToggle}/>
        </Dialog>
        <ul>
          <div>Cards currently in deck</div>
          <List deckList={cardList} modalstatus={this.state} toggle={this.handleToggle}/>
        </ul>
      </div>
    )
  }
}

export default ListContainer;