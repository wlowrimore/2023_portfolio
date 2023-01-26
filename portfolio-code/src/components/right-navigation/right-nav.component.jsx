import { NavigationContainer, NavLink, NavLinks } from "./right-nav.styles";

const RightNav = ({ open }) => {
  const closeMenu = ({ setOpen }) => {
    setOpen(!open);
  };

  return (
    // <NavigationContainer>
    <NavLinks open={open}>
      <NavLink to="/" onClick={closeMenu}>
        about
      </NavLink>
      <NavLink to="projects" onClick={closeMenu}>
        projects
      </NavLink>
      <NavLink to="skills" onClick={closeMenu}>
        skills
      </NavLink>
      <NavLink to="contact" onClick={closeMenu}>
        contact
      </NavLink>
      <NavLink to="resume" onClick={closeMenu}>
        resume
      </NavLink>
    </NavLinks>
    // </NavigationContainer>
  );
};

export default RightNav;
