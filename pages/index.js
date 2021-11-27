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
  HStack,
  Button,
} from '@chakra-ui/react';
import GridItem from '../components/gridItem';
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
          <HStack spacing="10px" justify="center">
            <Box align="center" fontSize="sm">
              <Link
                href="https://github.com/itta611"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <Button
                  leftIcon={<FaGithub />}
                  variant="outline"
                >
                  @itta611
                </Button>
              </Link>
            </Box>
            <Box align="center" fontSize="sm">
              <Link
                href="https://twitter.com/ittaFunahashi"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <Button
                  variant="outline"
                  leftIcon={<FaTwitter />}
                >
                  @ittaFunahashi
                </Button>
              </Link>
            </Box>
          </HStack>
        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default App;
