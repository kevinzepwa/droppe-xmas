import React from 'react';

function Checkoutbutton(props) {
  return (<div>
      <button className="button chekout-button"
              onClick={() => props.checkOut()}>
                Check Out
        </button >
  </div>);
}

export default Checkoutbutton;
