import React from 'react';
import List from './list.jsx';

import Dialog from '@material-ui/core/Dialog';
import Modal from './modal.jsx';
import DeckNameInput from './deckNameInput.jsx';

class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleModal : false,
      save : false
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(e) {
    this.setState({
      save: !this.state.save
    });
    e.preventDefault();
  }

  handleToggle(e) {
    this.setState({
      toggleModal: !this.state.toggleModal
    });
    e.preventDefault();
  }

  render() {
    let cardList = this.props.deckList.currentDeck;
    let form = this.props.form;
    let deckSubmission = this.props.decksub;
    
    return (
      <div>
        <Dialog open={this.state.toggleModal} onClose={this.handleToggle}>
          <Modal toggle={this.handleToggle}/>
        </Dialog>
        <Dialog open={this.state.save} onClose={this.handleSave}>
          <DeckNameInput form={form} decksubmission={deckSubmission}/>
        </Dialog>
        <ul>
          <div>Cards currently in deck</div>
          <List currentDeck={cardList} modalstatus={this.state} toggle={this.handleToggle}/>
        </ul>
        <button id="save-deck" onClick={this.handleSave}>Save Deck</button>
      </div>
    )
  }
}

export default ListContainer;