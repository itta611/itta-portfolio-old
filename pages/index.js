import React from 'react';
import {
  Box,
  Text,
  VStack,
  Grid,
  Flex,
} from '@chakra-ui/react';
import { GridItem } from '../components/gridItem';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import chokokucadThumb from '../public/chokokucadThumb.png';
import droneflightThumb from '../public/droneflightThumb.png';

function App() {
  console.log(chokokucadThumb)
  return (
    <Box>
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
      {/* <Box p="10">
        <Text
          fontSize="2xl"
          fontWeight="extrabold"
          fontFamily="Futura"
        >
          Itta Funahashi
        </Text>
        <Text>
          Rolem Ipsum is simply dummy text of the printing and typesetting
        </Text>
      </Box> */}
      <Box
        p="10"
      >
        <Text
          fontSize="2xl"
          fontWeight="extrabold"
          fontFamily="Futura"
        >
          Works
        </Text>
        <Flex
          justify="space-around"
          align="center"
          alignItems="normal"
          space="2"
          p="3"
          mt="5"
        >
          <GridItem 
            thumbnail={chokokucadThumb}
            href="https://chokokucad.itta.dev"
            text="Chokoku CAD"
          >
            A breakthrough CAD application on your browser
          </GridItem>
          <GridItem 
            thumbnail={droneflightThumb}
            href="./drone/"
            text="Drone Flight"
          >
            Learning Programming with Drone
          </GridItem>
        </Flex>
      </Box>
    </Box>
  );
}

export default App;
