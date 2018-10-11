import React from 'react';

const FormatLegality = (props) => {
  let formatArray = props.props;
  if (formatArray.length === 0) {
    return (
      <div>Not legal in any format</div>
    );
  } else {
    return (
      <div className="format-legality-list">
      {formatArray.map(legalities => (
        <div name={legalities.format} key={legalities.format}>
          <div>{legalities.format} => {legalities.legality}</div> 
        </div>
      ))}
      </div>
    );
  }
}

export default FormatLegality;