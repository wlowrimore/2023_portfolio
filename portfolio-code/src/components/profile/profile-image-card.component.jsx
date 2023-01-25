import {
  RootContainer,
  Title,
  AboutContainer,
  ImageContainer,
  AboutTextContainer,
  Image,
} from "./profile-image-card.styles";

import AboutText from "../profile-about/about-text.component";
import Selfie from "../../assets/selfPic.jpg";

const ProfileImgCard = () => {
  return (
    <RootContainer>
      <Title>My name is William Lowrimore</Title>
      <AboutContainer>
        <ImageContainer>
          <Image src={Selfie} alt="selfie" />
        </ImageContainer>
        <AboutText />
        <AboutTextContainer></AboutTextContainer>
      </AboutContainer>
    </RootContainer>
  );
};

export default ProfileImgCard;
