import Image from 'next/image';
import { LinkBox } from '@chakra-ui/react';

const GridItem = (props) => (
  <LinkBox
  borderRadius="md"
  >
    <Image
      {...props}
      width="300"
      height="200"
      layout="fixed"
      objectFit="cover"
      objectPosition="50% 50%;"
    />
    testtesttesttesttesttesttesttesttesttesttesttesttesttest
  </LinkBox>
)

export default GridItem;