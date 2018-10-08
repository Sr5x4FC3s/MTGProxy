import React from 'react';
import List from './list.jsx';

const ListContainer = (props) => {
  let cardList = props.deckList.deckList;

  return (
    <ul>
      <h2>Cards currently in deck</h2>
      <List deckList={cardList}/>
    </ul>
  )
}

export default ListContainer;