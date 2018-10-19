import React from 'react';
import DrawCards from './drawCards.jsx'; 
import Mulligan from './mulligan.jsx';
import RenderHand from './renderHand.jsx';
import Dialog from '@material-ui/core/Dialog'; 
import CardActions from './cardActions.jsx';

export default class Hand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleCardAction: false,
      clickedCard: null
    };
    this.toggleCardActions = this.toggleCardActions.bind(this);
  }

  toggleCardActions(e) {
    let event = e.target.id
    this.props.target(event);

    this.setState({
      toggleCardAction: !this.state.toggleCardAction
    })
  }

  render() {
    let deckList = this.props.state.passedState.list;
    return (
      <div id="hand-container">
        <h5>Hand</h5>
        <Dialog open={this.state.toggleCardAction} onClose={this.toggleCardActions}>
          <CardActions state={this.state} play={this.props.play} exile={this.props.exile} discard={this.props.discard} shuffle={this.props.shuffle}/>
        </Dialog>
        <DrawCards draw={this.props.draw} props={this.props}/>
        <Mulligan draw={this.props.draw} props={this.props}/>
        <RenderHand props={this.props} toggle={this.toggleCardActions}/>
      </div>
    )
  }
};
