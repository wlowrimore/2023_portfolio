import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import { NavigationContainer, LogoContainer } from "./navigation.styles";

import Logo from "../../assets/logo.png";
import Burger from "../../components/right-navigation/burgerNav.component";

const Navigation = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <img src={Logo} alt="home" />
        </LogoContainer>
        <Burger />
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
