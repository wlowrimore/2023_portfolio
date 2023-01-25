import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    padding: 0;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 6px;

  img {
    width: 6em;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    img {
      width: 3.5em;
    }
  }
`;
