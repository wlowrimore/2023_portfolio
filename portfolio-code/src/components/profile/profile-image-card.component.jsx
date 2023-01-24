import { useNavigate } from "react-router-dom";

import {
  RootContainer,
  Title,
  AboutContainer,
  ImageContainer,
  AboutTextContainer,
  ButtonContainer,
  Image,
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
      <Title>My name is William Lowrimore</Title>
      <AboutContainer>
        <ImageContainer>
          <Image src={Selfie} alt="selfie" />
        </ImageContainer>
        <AboutText />
        <AboutTextContainer></AboutTextContainer>
      </AboutContainer>
    </RootContainer>
    // <RootContainer>
    //   <Title>My name is William Lowrimore...</Title>
    //   <AboutContainer>
    //     <ImageContainer>
    //       <Image src={Selfie} alt="selfie" />
    //     </ImageContainer>
    //     <AboutTextContainer>
    //       <AboutText />
    //     </AboutTextContainer>
    //   </AboutContainer>
    //   <ButtonContainer>
    //     <Button buttonType={"base"} onClick={goToResumeHandler}>
    //       Jump to Resume
    //     </Button>
    //   </ButtonContainer>
    // </RootContainer>
  );
};

export default ProfileImgCard;
