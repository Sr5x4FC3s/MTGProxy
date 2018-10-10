import React from 'react';
import List from './list.jsx';

import Dialog from '@material-ui/core/Dialog';
import Modal from './modal.jsx';
import DeckNameInput from './deckNameInput.jsx';
import CardImageModal from './cardImage.jsx';

import { grabImage } from '../../../helperFunctions/clientHelperFunctions/helper.js';

class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleModal : false,
      save : false, 
      toggledImage : false,
      targetCard: null,
      targetCardImageUrl : null
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleImageToggle = this.handleImageToggle.bind(this);
    this.grabCardId = this.grabCardId.bind(this);
  }
  
  grabCardId(id) {
    this.setState({
      targetCard : id
    });
  }

  handleImageToggle(e) {
    this.setState({
      toggleModal : !this.state.toggleModal,
      toggledImage : !this.state.toggledImage
    });
    //now to make an axios get call and get card image and send back here
    let promise = new Promise((resolve, reject) => {
      let card = grabImage(this.state.targetCard);
      resolve(card);
    }).then((result) => {
      this.setState({
        targetCardImageUrl : result.data
      });
      return result;
    });

    e.preventDefault();
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
    this.props.captureCard(e.target.id);
    this.grabCardId(e.target.id);
    e.preventDefault();
  }

  render() {
    let cardList = this.props.deckList.currentDeck;
    let form = this.props.form;
    let deckSubmission = this.props.decksub;
    let removeCard = this.props.delete;
    
    return (
      <div>
        <Dialog open={this.state.toggleModal} onClose={this.handleToggle}>
          <Modal toggle={this.handleToggle} delete={removeCard} toggleImage={this.handleImageToggle}/>
        </Dialog>
        <Dialog open={this.state.save} onClose={this.handleSave}>
          <DeckNameInput form={form} decksubmission={deckSubmission}/>
        </Dialog>
        <Dialog open={this.state.toggledImage} onClose={this.handleImageToggle}>
          <CardImageModal state={this.state}/>
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