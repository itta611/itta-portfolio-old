import { Box, Text, Link, Image } from '@chakra-ui/react';

export const GridItem = ({thumbnail, href, text, children}) => (
  <Box
    borderRadius="md"
    overflow="hidden"
    shadow="md"
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
      width="300px"
      height="200px"
      objectFit="cover"
      objectPosition="50% 50%;"
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