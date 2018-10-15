import React from 'react';
import { convertObject2Array } from '../../../helperFunctions/clientHelperFunctions/helper.js';

const FormatLegality = (props) => {
  let legalitiesObject = props.props;
  let legalitiesArray = convertObject2Array(legalitiesObject);

  if (legalitiesArray.length === 0) {
    return (
      <div>Not legal in any format</div>
    );
  } else {
    return (
      <div className="format-legality-list">
      {legalitiesArray.map(legalities => (
        <div name={legalities} key={legalities}>
          <div>{legalities}</div> 
        </div>
      ))}
      </div>
    );
  }
}

export default FormatLegality;