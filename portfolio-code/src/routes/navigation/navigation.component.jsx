import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";
import Logo from "../../assets/logo.png";

const Navigation = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <img src={Logo} alt="home" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/">about</NavLink>
          <NavLink to="projects">projects</NavLink>
          <NavLink to="skills">skills</NavLink>
          <NavLink to="contact">contact</NavLink>
          <NavLink to="resume">resume</NavLink>
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
