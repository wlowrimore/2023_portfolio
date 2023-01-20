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
      <Title>Contact Links</Title>
      <IconsContainer>
        <Icon>
          <FaGlobe
            onClick={() => window.open("https://www.williamlowrimore.com")}
            rel="noreferrer"
          />
        </Icon>
        <Icon>
          <FaLinkedinIn
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/william-lowrimore-21778310"
              )
            }
          />
        </Icon>
        <Icon>
          <FaSlack
            onClick={() => window.open("https://www.wlowrimore.slack.com")}
          />
        </Icon>
        <Icon>
          <FaGithub
            onClick={() => window.open("https://www.github.com/wlowrimore")}
          />
        </Icon>
        <Icon>
          <FaDiscord onClick={() => window.open("https://www.discord.com")} />
        </Icon>
      </IconsContainer>
    </AltContactContainer>
  );
};

export default AltContact;
