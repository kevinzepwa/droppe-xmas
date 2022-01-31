import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ visible, checkOut }) => visible ? ReactDOM.createPortal(
  <div className="modal">
    
    <div className="modal-overlay">
      <div className="modal-pop" role="dialog" aria-modal="true">
        <div className="check-title"><h3>Check Out</h3></div>
        <p>Check out Table.</p>
        <button className="button button-close" type="button" onClick={checkOut}>Close</button>
      </div>  
  </div>    
  </div>, document.body
) : null;

export default Modal;