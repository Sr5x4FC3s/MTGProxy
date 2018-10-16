import React from 'react';
import DropDown from './dropDown.jsx';

const Modal = (props) => {
  let increment = props.increment;
  let target = props.props.targetCard;
  return (
    <div>
      <table className="modal-button">
        <tbody>
          <tr>
            <td>
              <button id="remove-card-button" onClick={props.delete}>delete</button>
            </td>
            <td>
              <button id="card-information-button" onClick={props.toggleInfo}>card information</button>
            </td>
            <td>
              <button id="card-image-button" onClick={props.toggleImage}>card image</button>
            </td>
          </tr>
          <tr>
            <td>
              <DropDown increment={increment} target={target}/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Modal;