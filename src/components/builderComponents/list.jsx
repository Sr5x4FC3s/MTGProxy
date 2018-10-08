import React from 'react';
import { convertString, removeWhiteSpaces } from '../../../helperFunctions/clientHelperFunctions/helper.js';

const List = (props) => {
  let convertColons = convertString(props.deckList);
  let whiteSpacesRemoved = removeWhiteSpaces(convertColons);

  return (
    <div className='card-names'>
      {whiteSpacesRemoved.map(name => (
        <li><a name={name} key={name} onClick={props.toggle} style={{cursor: 'pointer'}}>{name}</a></li>
      ))}
    </div>
  )
};

export default List;
