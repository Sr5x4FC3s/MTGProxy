import React from 'react';
import { convertString, removeWhiteSpaces } from '../../../helperFunctions/clientHelperFunctions/helper.js';

const List = (props) => {
  let convertColons = convertString(props.deckList);
  let whiteSpacesRemoved = removeWhiteSpaces(convertColons);

  return (
    <div className='card-names'>
      {whiteSpacesRemoved.map(name => (
        <li name={name} key={name}>{name}</li>
      ))}
    </div>
  )
};

export default List;
