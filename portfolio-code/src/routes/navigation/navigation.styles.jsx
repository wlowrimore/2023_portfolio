import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 6px;

  img {
    width: 6em;
  }

  @media screen and (max-width: 1024px) {
    img {
      width: 4em;
      margin-top: -2px;
    }
  }
`;

// export const NavLinks = styled.div`
//   width: 50%;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
//   position: relative;

//   @media screen and (max-width: 1024px) {
//     display: none;
//   }
// `;

// export const Icon = styled.h1`
//   position: absolute;
//   top: -14px;
//   right: 0;
//   width: 24px;
//   height: auto;
//   padding-right: 30px;
// `;

// export const MobileNavContainer = styled.div`
//   display: none;

//   @media screen and (max-width: 1024px) {
//     display: inline;
//   }
// `;
