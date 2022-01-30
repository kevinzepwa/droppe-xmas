import React from 'react';
// import Modal from './Modal';

function Checkoutbutton(props) {
  return (<div>
      <button className="button chekout-button"
               onClick={props.checkOut}>
                Check Out
        </button >
        {/* <Modal visible={props.visible} checkOut={props.checkOut} /> */}
  </div>);
}

export default Checkoutbutton;



{/* <div className="App">
              <button onClick={checkOut}>Show Modal</button>
              <Modal visible={visible} checkOut={checkOut} />
          </div> */}