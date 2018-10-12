import React from 'react';

export default class VirtualPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passedState : null,
      hasPassed : false
    };
  }

  componentWillMount() {
    let receivedState = this.props.location.state;
    if (this.state.hasPassed === false) {
      this.setState({
        passedState : receivedState,
        hasPassed : true
      });
    }
  }

  render() {
    console.log('virtual ', this.state);
    return (
      <div>virtual player component</div>
    )
  }
};