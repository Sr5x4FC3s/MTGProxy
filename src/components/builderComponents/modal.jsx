import React from 'react';

const Modal = (props) => {
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
        </tbody>
      </table>
    </div>
  )
}

export default Modal;