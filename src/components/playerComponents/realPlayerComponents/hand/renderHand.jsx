import React from 'react';

const RenderHand = (props) => {
  console.log('render the hand', props)
  //conditional render based on state being null or not
  return (
    <div id="render-hand-container">
      { props.props.state.hand !== null ?
        props.props.state.hand.map(cards => {
        return (
          <div id={cards} name={cards} props={cards} onClick={props.toggle}>{cards}</div>
        )
      }) : (
        null
      )}
    </div>
  )
};

export default RenderHand;