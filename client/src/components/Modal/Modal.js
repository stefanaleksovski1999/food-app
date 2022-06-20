import React from 'react'
import "./Modal.css"

function Modal({ closeModal }, recipe ) {

    console.log(recipe)

  return (
    <div className="modalBackground">
        <div className="modalContainer">
            <div className="titleCloseBtn">
                <button onClick={() => closeModal(false)}> X </button>
            </div>
            <div className="modalTitle">
                <h1>{}</h1>
            </div>
            <div className="modalContent">
                <div className="modalInfo"></div>
                <div className="modalDetails"></div>
            </div>
            
        </div>
    </div>
  )
}

export default Modal