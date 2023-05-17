import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import { BsApple } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";

const Layout = (props) => {
 
  return (
    <div className="layout">
      <nav>
        <ul className="layout">
          <div className="layout-li">
            <li className="mac">
              <Link to="/">
                {" "}
                <BsApple style={{width:'30px',height:'20px'}} /> Shop
              </Link>
            </li>
            <li>             
               {/* <Link to="/Login"></Link> */}
</li>
            <div className="items">
            <li>
              <Link to="/AddToCart"><div className="cart-count">{props.cartQuantity}<IoCartOutline style={{width:'30px',height:'25px'}}/></div></Link>
            </li>
            <li>
              <Link to="/Checkout" style={{color:'black'}}>Buy Now</Link>
            </li>
            </div>

          </div>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
