import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import { NavigationContainer, NavLinks, NavLink } from "./navigation.styles";

const Navigation = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <NavLinks>
          <NavLink to="about">about me</NavLink>
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
