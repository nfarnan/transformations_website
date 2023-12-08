import {Link, useLocation} from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';
import logo from '../assets/CESR logo horizontal white copy.png'
function List({ setNavClass }) {
    const location = useLocation();
    const links = ["/" , "/map", "/timeline","/media"];
    const names = ["Home", "Map", "Timeline", "Media"];
    let dict = {};
  
    for (let i = 0; i < links.length; i += 1) {
      dict[links[i]] = names[i];
    }
  
    const listItems = links.map((link, i) => {
      if (link == location.pathname) {
        return (
          <li key={i} className="navbar-item" onClick={() => {
            console.log("clicked li");
            setNavClass("navbar");
          }}>
            <div className="outer-link-div" >
              <Link to={link}>
                <div className="inner-link-div">{dict[link]}</div>
              </Link>
            </div>
          </li>
        );
      } else {
        return (
          <li key={i} onClick={() => {
            console.log("clicked li");
            setNavClass("navbar");
          }}>
            <div className="outer-link-div">
              <Link to={link}>
                <div className="inner-link-div">{dict[link]}</div>
              </Link>
            </div>
          </li>
        );
      }
    });
  
    return (
      <ul className="navbar-list">
        {listItems}
      </ul>
    );
  }
  function Burger({ navClass, setNavClass }) {
    return (
      <button className="burger-button" onClick={() => {
          if (navClass == "navbar") {
            setNavClass("navbar navbar-new");
          }
          else {
            setNavClass("navbar");
          }
          console.log(navClass);
      }}>
        <IoMenu className="io-menu" />
      </button>
    );
  }
  
  function Navbar() {
    const [navClass, setNavClass] = useState("navbar");
    const logoAlt = "Center for Ethnic Studies Research logo";
  
    return (
      <div>
        <div className="header">
          <div className="header-seal">
            <img src={logo} alt={logoAlt}></img>
          </div>
          <h1>The Pittsburgh Transformations Project</h1>
        </div>
        <nav className={navClass}>
          <Burger navClass={navClass} setNavClass={setNavClass}></Burger>
          <List setNavClass={setNavClass} />
        </nav>
      </div>
    );
  }
  export default Navbar;