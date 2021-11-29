import { Text } from "@chakra-ui/react";

const Caption = ({children}) => (
  <Text
    fontSize="2xl"
    fontWeight="extrabold"
    fontFamily="Futura"
    mb="5"
  >
    {children}
  </Text>
);

export default Caption;