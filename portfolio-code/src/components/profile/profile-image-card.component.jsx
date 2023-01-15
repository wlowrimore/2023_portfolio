import {
  ImageCardContainer,
  AboutContainer,
} from "./profile-image-card.styles";
import Selfie from "../../assets/selfPic.jpg";
const ProfileImgCard = () => {
  return (
    <AboutContainer>
      <ImageCardContainer>
        <img src={Selfie} alt="selfie" />
      </ImageCardContainer>
    </AboutContainer>
  );
};

export default ProfileImgCard;
