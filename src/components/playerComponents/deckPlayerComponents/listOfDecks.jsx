import React from 'react';

const ListofDecks = (props) => {
  return (
    <div>
      Select a deck :
      {props.state.allDecks.map(deck => {
        return (
          <div><a id={deck.name} name={deck.name} onClick={props.selectdeck}>{deck.name}</a></div>
        )
      })}
    </div>
  )
};

export default ListofDecks;