import {
  AltContactContainer,
  Title,
  IconsContainer,
  Icon,
} from "./alt-contact.stryles";

import {
  FaGithub,
  FaLinkedinIn,
  FaDiscord,
  FaGlobe,
  FaSlack,
} from "react-icons/fa";

const AltContact = () => {
  return (
    <AltContactContainer>
      <Title>Other Forms of Contact</Title>
      <IconsContainer>
        <Icon>
          <FaGlobe />
        </Icon>
        <Icon>
          <FaLinkedinIn />
        </Icon>
        <Icon>
          <FaSlack />
        </Icon>
        <Icon>
          <FaGithub />
        </Icon>
        <Icon>
          <FaDiscord />
        </Icon>
      </IconsContainer>
    </AltContactContainer>
  );
};

export default AltContact;
