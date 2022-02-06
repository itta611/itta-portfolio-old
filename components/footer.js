import {
  Box,
  ButtonGroup,
} from "@chakra-ui/react";
import LinkButton from "./linkButton";
import { FaTwitter, FaGithub, FaCode } from "react-icons/fa";

const Footer = () => (
  <Box align="center" p="2">
    <ButtonGroup
      spacing="10px"
      justify="center" 
      variant="outline"
    >
      <LinkButton
        href="https://github.com/itta611"
        leftIcon={<FaGithub />}
      >
        @itta611
      </LinkButton>
      {/* <LinkButton
        href="https://twitter.com/ittaFunahashi"
        leftIcon={<FaTwitter />}
      >
        @ittaFunahashi
      </LinkButton> */}
      <LinkButton
        href="https://github.com/itta611/itta-portfolio"
        leftIcon={<FaCode />}
      >
        Source Code
      </LinkButton>
    </ButtonGroup>
  </Box>
);

export default Footer;