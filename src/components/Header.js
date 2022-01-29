import React from 'react';

export default function Header() {
  return (<div className='top-div'>
      <header className="header">
          <logo>
            &#127876;
          </logo>
          <h4>Droppe X-mas</h4>
          <ul className='header-links'>
              <li>
                <a href="./">Home</a>
              </li>
              <li>
                <a href="/">Carts</a>
              </li>
          </ul>
        </header>
  </div>);
}
