import React from 'react';

const CardList = (props) => {
  console.log('sdsadsasdsd', props);
  return (
    <div>
      <ul>
        {props.deckInfo.map(cards => {
          return (
            <li id={cards} name={cards}>{cards}</li>
          )
        })}
      </ul>
    </div>
  )
};

export default CardList;