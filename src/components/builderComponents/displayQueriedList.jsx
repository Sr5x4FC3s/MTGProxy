import React from 'react';

const DisplayQueriedList = (props) => {
  let targetRetrieval = (e) => {
    let target = e;
    props.save(target);
  }

  return (
    <div>
      <ul>
      {props.state.searchResults.map(cards => {
        return (
          <li><a id={cards.name} name={cards.name} key={cards.name} onClick={() => {targetRetrieval(document.getElementById(cards.name))}}>{cards.name}</a></li>
        )
      })}
      </ul>
    </div>
  )
}

export default DisplayQueriedList;