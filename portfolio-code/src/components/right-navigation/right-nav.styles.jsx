import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavLink = styled(Link)`
  padding: 15px 0px;
  font-size: 18px;
  cursor: pointer;
`;

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 16px;
  margin: 0 12px;
  flex-flow: row nowrap;

  @media screen and (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(3px);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    ${NavLink} {
      color: white;
    }
  }
`;
export const NavigationContainer = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
`;

// export const NavLink = styled(Link)`
//   font-size: 22px;
//   font-weight: bold;
//   color: #fff;
//   margin: 10px 0;
// `;
