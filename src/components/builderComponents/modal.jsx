import React from 'react';

const Modal = (props) => {
  console.log("yefsedssdfsdsfsdcsdcds", props)
  return (
    <div>
      <table className="modal-button">
        <tbody>
          <tr>
            <td>
              <button id="remove-card-button" onClick={props.delete}>delete</button>
            </td>
            <td>
              <button>save</button>
            </td>
            <td>
              <button>card information</button>
            </td>
            <td>
              <button>card image</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Modal;