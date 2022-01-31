import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <header className="header">
          <div>
            &#127876;
          </div>
          <h4>Droppe X-mas</h4>
          <ul className='header-links'>
            <li>
                <a href="./">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </a>
            </li>
            <li>
              <Link to="/checkoutpage">Check Out</Link>
          </li>
          </ul>
        </header>
      {/* <header>
        <ul> 
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/checkoutpage">Check Out</Link>
          </li>
        </ul>
        </header> */}
      <Outlet />
    </>
  )
};

export default Layout;