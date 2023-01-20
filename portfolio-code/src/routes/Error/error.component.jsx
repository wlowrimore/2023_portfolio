import { useNavigate } from "react-router-dom";
import {
  ErrorContainer,
  Left,
  Right,
  ErrorCode,
  ErrorMessage,
  ButtonContainer,
} from "./error.styles";
import Button from "../../components/Button/button.component";

import Logo from "../../assets/logo.png";
import DeadLink from "../../assets/deadLink.png";

const Error = () => {
  const navigate = useNavigate();

  return (
    <ErrorContainer>
      <Left>
        <img src={Logo} alt="site logo" />
        <ErrorCode>
          404
          <span>Whoops...You've reached a "Dead Link"!</span>
        </ErrorCode>
        <ErrorMessage>
          Check your address bar. The URL you requested does not exist on the
          server.
        </ErrorMessage>
        <ButtonContainer>
          <Button buttonType={"base"} onClick={() => navigate(-1)}>
            Go Back
          </Button>
        </ButtonContainer>
      </Left>
      <Right>
        <img src={DeadLink} alt="dead link" />
      </Right>
    </ErrorContainer>
  );
};

export default Error;
