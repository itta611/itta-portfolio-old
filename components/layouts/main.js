import {
  Container,
  Box
} from '@chakra-ui/react';
// import { GridItemStyle } from '../gridItem';
import Footer from '../footer';

const Layout = ({children}) => (
  <Box as="main" pb={8}>
    <head>
      <title>Itta's Portfolio</title>
      {/* <GridItemStyle /> */}
    </head>
    <Container fontSize="xl" maxW="container.md">
      {children}
      <Footer />
    </Container>
  </Box>
)

export default Layout;