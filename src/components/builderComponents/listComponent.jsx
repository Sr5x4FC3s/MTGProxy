import React from 'react';
import List from './list.jsx';

import Dialog from '@material-ui/core/Dialog';
import Modal from './modal.jsx';
import DeckNameInput from './deckNameInput.jsx';
import CardImageModal from './cardImage.jsx';
import CardInfo from './cardInfo.jsx';

import { grabImage, grabInformation } from '../../../helperFunctions/clientHelperFunctions/helper.js';

class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleModal : false,
      save : false, 
      toggledImage : false,
      toggleInfo : false,
      targetCard: null,
      targetCardImageUrl : null,
      targetCardInfo : null
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleImageToggle = this.handleImageToggle.bind(this);
    this.grabCardId = this.grabCardId.bind(this);
    this.handleInfoToggle = this.handleInfoToggle.bind(this);
  }

  handleInfoToggle(e) {
    let promise = new Promise((resolve, reject) => {
      let card = grabInformation(this.state.targetCard);
      resolve(card);
    }).then((result) => {
      this.setState({
        toggleInfo:!this.state.toggleInfo,
        targetCardInfo : result.data
      });
      return result;
    });

    e.preventDefault();
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
    let formType = this.props.type;
    
    return (
      <div>
        <Dialog open={this.state.toggleModal} onClose={this.handleToggle}>
          <Modal toggle={this.handleToggle} delete={removeCard} toggleImage={this.handleImageToggle} toggleInfo={this.handleInfoToggle}/>
        </Dialog>
        <Dialog open={this.state.save} onClose={this.handleSave}>
          <DeckNameInput form={form} decksubmission={deckSubmission} type={formType}/>
        </Dialog>
        <Dialog open={this.state.toggledImage} onClose={this.handleImageToggle}>
          <CardImageModal state={this.state}/>
        </Dialog>
        <Dialog open={this.state.toggleInfo} onClose={this.handleInfoToggle}>
          <CardInfo state={this.state}/>
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