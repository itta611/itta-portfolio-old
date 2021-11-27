import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Container,
  Flex,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';
import GridItem from '../components/gridItem';
import LinkButton from '../components/linkButton';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import chokokucadThumb from '../public/chokokucadThumb.png';
import { FaTwitter, FaGithub } from "react-icons/fa";

function App() {
  console.log(chokokucadThumb)
  return (
    <ChakraProvider theme={theme}>
      <Container fontSize="xl" maxW="container.md">
        <Grid minH="30vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Text
              fontSize="6xl"
              fontWeight="extrabold"
              fontFamily="Futura"
            >
              Itta's Portfolio
            </Text>
          </VStack>
        </Grid>
        <Box p="10">
          <Text
            fontSize="2xl"
            fontWeight="extrabold"
            fontFamily="Futura"
          >
            Works
          </Text>
          <Flex justify="space-around" align="center">
            <GridItem 
              src={chokokucadThumb}
              alt="Chokoku CAD"
            />
            <GridItem 
              src={chokokucadThumb}
              alt="Chokoku CAD"
            />
          </Flex>
        </Box>
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
            <LinkButton
              href="https://twitter.com/ittaFunahashi"
              leftIcon={<FaTwitter />}
            >
              @ittaFunahashi
            </LinkButton>
          </ButtonGroup>
        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default App;
