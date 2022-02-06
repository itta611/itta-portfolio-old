import { Grid, VStack, Text } from "@chakra-ui/layout"
import { ColorModeSwitcher } from './ColorModeSwitcher';

const Header = () => (
  <Grid minH="20vh" p="3">
    <ColorModeSwitcher justifySelf="flex-end" />
    <VStack spacing="8">
      <Text
        fontSize="6xl"
        fontWeight="extrabold"
        fontFamily="Futura"
      >
        Itta&apos;s Portfolio
      </Text>
    </VStack>
  </Grid>
);

export default Header;