import { Fragment } from "react";

import {
  ImageCardContainer,
  AboutContainer,
  Title,
} from "./profile-image-card.styles";

import AboutText from "../profile-about/about-text.component";
import Selfie from "../../assets/selfPic.jpg";
const ProfileImgCard = () => {
  return (
    <Fragment>
      <Title>My name is William Lowrimore...</Title>
      <AboutContainer>
        <ImageCardContainer>
          <img src={Selfie} alt="selfie" />
          <AboutText />
        </ImageCardContainer>
      </AboutContainer>
    </Fragment>
  );
};

export default ProfileImgCard;
