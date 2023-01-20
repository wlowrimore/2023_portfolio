import { Fragment } from "react";

import { useNavigate } from "react-router-dom";

import {
  RootContainer,
  ImageCardContainer,
  AboutContainer,
  Title,
  ButtonContainer,
} from "./profile-image-card.styles";

import AboutText from "../profile-about/about-text.component";
import Selfie from "../../assets/selfPic.jpg";
import Button from "../Button/button.component";

const ProfileImgCard = () => {
  const navigate = useNavigate();

  const goToResumeHandler = () => {
    navigate("resume");
  };

  return (
    <RootContainer>
      <Title>My name is William Lowrimore...</Title>
      <AboutContainer>
        <ImageCardContainer>
          <img src={Selfie} alt="selfie" />
          <AboutText />
        </ImageCardContainer>
      </AboutContainer>
      <ButtonContainer>
        <Button buttonType={"base"} onClick={goToResumeHandler}>
          Jump to Resume
        </Button>
      </ButtonContainer>
    </RootContainer>
  );
};

export default ProfileImgCard;
