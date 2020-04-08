import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";



const Header = () => {
  return (
    <Menu fluid stackable className='home-header' id="menu" >
      <Link to="/">
        <Menu.Item header>
          STAR WARS
        </Menu.Item>
      </Link>
    </Menu>
  );
};

export default Header;
