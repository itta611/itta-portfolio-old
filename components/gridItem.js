import Image from 'next/image';
import { Box, Text, Link } from '@chakra-ui/react';

export const GridItem = ({thumbnail, href, text, children}) => (
  <Box
    borderRadius="md"
    overflow="hidden"
    shadow="md"
    borderRadius="md"
    textAlign="center"
    w="300px"
    as={Link}
    href={href}
    target="_blank"
    textDecoration="none!important"
  >
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
      <Text p="3">
        {text}
      </Text>
      <Text
        p="2"
        pb="7"
        fontSize="sm"
      >
        {children}
      </Text>
  </Box>
)