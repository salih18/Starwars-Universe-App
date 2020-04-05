import React from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from "semantic-ui-react";



const Header = () => {
  return (
    <Menu fluid stackable id="menu" >
      <Link to="/">
        <Menu.Item header>
          <Icon name="film" size="large" />
          Movie App
        </Menu.Item>
      </Link>
    </Menu>
  );
};

export default Header;
