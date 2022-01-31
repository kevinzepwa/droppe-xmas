import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ visible, checkOut }) => visible ? ReactDOM.createPortal(
  <div className="modal">
    
    <div className="modal-overlay">
      <div className="modal-pop" role="dialog" aria-modal="true">
        <p className="check-p">&#127876;</p>
        <div className="check-title"><h3>Thank you for Shopping with us.</h3></div>
        <p className="check-p">Have a Merry Christmas</p>
        <button className="button button-close" type="button" onClick={checkOut}>Close</button>
      </div>  
  </div>    
  </div>, document.body
) : null;

export default Modal;