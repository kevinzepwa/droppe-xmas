import React from 'react';
// import Modal from './Modal';

function Checkoutbutton(props) {
  return (<div>
      <button className="button chekout-button"
               onClick={props.checkOut}>
                Proceed
        </button >
        {/* <Modal visible={props.visible} checkOut={props.checkOut} /> */}
  </div>);
}

export default Checkoutbutton;
