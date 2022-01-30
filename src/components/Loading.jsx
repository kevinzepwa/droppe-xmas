import React from 'react';

export default function Loading() {
  return (<div>
    <div className='loading'>
      <svg viewBox="0 0 960 300">
      <symbol id="s-text">
        <text text-anchor="middle" x="50%" y="80%">L o a d i n g . .</text>
      </symbol>
              
      <g className = "g-ants">
        <use xlinkHref="#s-text" className ="text-copy"></use>
        <use xlinkHref="#s-text" className ="text-copy"></use>
        <use xlinkHref="#s-text" className ="text-copy"></use>
        <use xlinkHref="#s-text" className ="text-copy"></use>
        <use xlinkHref="#s-text" className ="text-copy"></use>
      </g>
      </svg>
    </div>
</div>);
}
