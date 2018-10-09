import React from 'react';
import { convertString, removeWhiteSpaces } from '../../../helperFunctions/clientHelperFunctions/helper.js';

const List = (props) => {
  let cardArray = props.currentDeck;

  return (
    <div className='card-names'>
      {cardArray.map(name => (
        <li><a id={name} key={name} onClick={props.toggle} style={{cursor: 'pointer'}}>{name}</a></li>
      ))}
    </div>
  )
};

export default List;
