import React from 'react';
import {
  Box,
  Text,
  Flex,
  Button,
  Link,
} from '@chakra-ui/react';
import { BioSection, BioYear } from '../components/bio.js';
import { GridItem } from '../components/gridItem';
import { FaArrowRight } from 'react-icons/fa';
import Caption from '../components/caption';
import chokokucadThumb from '../public/chokokucadThumb.png';
import droneflightThumb from '../public/droneflightThumb.png';

function App() {
  console.log(chokokucadThumb)
  return (
    <Box>
      <Box p="10">
        <Caption>
          About
        </Caption>
        <Text
          fontWeight="bold"
          mb="3"
        >船橋一汰 Itta Funahashi</Text>
        <Text>
          愛知県一宮市に住んでいます。<br />
          Web系をよくやっていて、サイバーセキュリティとデザインに興味があります。
        </Text>
      </Box>
      <Box p="10">
        <Caption>
          Bio
        </Caption>
        <ul>
          <BioSection><BioYear>2008</BioYear>Born in Aichi, Japan</BioSection>
          <BioSection><BioYear>2020</BioYear>U-22 プログラミング・コンテスト 2020 経済産業省商務政策局長賞 受賞</BioSection>
          <BioSection><BioYear>2021</BioYear>U-22 プログラミング・コンテスト 2021 経済産業大臣賞 受賞</BioSection>
        </ul>
      </Box>
      <Box
        p="10"
      >
        <Caption>
          Works
        </Caption>
        <Flex
          justify="space-between"
          align="center"
          alignItems="normal"
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
        <Flex
          justify="flex-end"
          mt="3"
        >
          <Button
            target="_blank"
            rightIcon={<FaArrowRight />}
            isExternal
            textDecoration="none!important"
            href="./old"
            colorScheme="teal"
            mt="3"
            as={Link}
          >
            My old works
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}

export default App;
