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
              <Link to="/checkoutpage">Check-out</Link>
          </li>
          </ul>
        </header>
      <Outlet />
    </>
  )
};

export default Layout;