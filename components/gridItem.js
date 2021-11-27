import Image from 'next/image';
import { Box, Text } from '@chakra-ui/react';

const GridItem = (props) => (
  <Box
  borderRadius="md"
  >
    <Image
      {...props}
      width="300"
      height="200"
      layout="fixed"
      objectFit="cover"
      objectPosition="50% 50%;"
      wordBreak="break-all"
    />
    <Text>
      testtesttesttesttesttesttesttesttesttesttesttesttesttest
    </Text>
  </Box>
)

export default GridItem;