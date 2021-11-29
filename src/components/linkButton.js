import { Button, Link } from '@chakra-ui/react'

const LinkButton = (props) => (
  <Button
    {...props}
    target="_blank"
    isExternal
    textDecoration="none!important"
    as={Link}
  ></Button>
);

export default LinkButton;