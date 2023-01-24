import { NavigationContainer, NavLink, NavLinks } from "./right-nav.styles";

const RightNav = ({ open }) => {
  return (
    // <NavigationContainer>
    <NavLinks open={open}>
      <NavLink to="/">about</NavLink>
      <NavLink to="projects">projects</NavLink>
      <NavLink to="skills">skills</NavLink>
      <NavLink to="contact">contact</NavLink>
      <NavLink to="resume">resume</NavLink>
    </NavLinks>
    // </NavigationContainer>
  );
};

export default RightNav;
