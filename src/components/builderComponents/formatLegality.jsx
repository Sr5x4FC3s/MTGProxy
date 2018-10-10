import React from 'react';

const FormatLegality = (props) => {
  console.log('format this shit', props.props)
  let formatArray = props.props;
  return (
    <div className="format-legality-list">
    {formatArray.map(legalities => (
      <div>
        <div>{legalities.format} => {legalities.legality}</div> 
      </div>
    ))}
    </div>
  ); 
}

export default FormatLegality;