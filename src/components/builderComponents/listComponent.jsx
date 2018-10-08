import React from 'react';
import List from './list.jsx';

const ListContainer = (props) => {
  let cardList = props.deckList.deckList;
  
  return (
    <ul>
      <List deckList={cardList}/>
    </ul>
  )
}

export default ListContainer;