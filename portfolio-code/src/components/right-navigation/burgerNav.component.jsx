import { Fragment, useState } from "react";
import { StyledBurger } from "./burgerNav.styles";
import RightNav from "./right-nav.component";

const Burger = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <Fragment>
      <StyledBurger open={open} onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </Fragment>
  );
};

export default Burger;
