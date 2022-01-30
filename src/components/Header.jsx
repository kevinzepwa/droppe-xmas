import React from 'react';

export default function Header() {
  return (<div className='top-div'>
      <header className="header">
          <div>
            &#127876;
          </div>
          <h4>Droppe X-mas</h4>
          <ul className='header-links'>
              <li>
              <div className="dropdown">
              <a href="/">Carts</a>
                <ul className="dropdown-content">                
                <a href="/">Cart 1</a> 
                <a href="/">Cart 2</a>
                <a href="/">Cart 3</a>
                <a href="/">Cart 4</a>
                <a href="/">Cart 5</a>
                </ul>
              </div>
              
            </li>
            <li>
                <a href="./">Home</a>
            </li>
          </ul>
        </header>
  </div>);
}
