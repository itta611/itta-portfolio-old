import Image from 'next/image';
import { Box, Text, Link, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { Global } from '@emotion/react';

export const GridItem = ({thumbnail, href, text, children}) => (
  <Box
    borderRadius="md"
    overflow="hidden"
    shadow="md"
    borderRadius="md"
    textAlign="center"
    w="300px"
  >
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={text}
        width="300"
        height="200"
        layout="fixed"
        objectFit="cover"
        objectPosition="50% 50%;"
        placeholder="blur"
        display="block"
      />
        <LinkOverlay href={href} target="_blank">
          <Text
            textDecoration="none!important"
            p="3"
          >
            {text}
          </Text>
          <Text
            textDecoration="none!important"
            p="5"
            fontSize="sm"
          >
            {children}
          </Text>
        </LinkOverlay>
    </LinkBox>
  </Box>
)