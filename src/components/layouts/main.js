import {
  Container,
  Box
} from '@chakra-ui/react';
import Header from '../header';
import Footer from '../footer';

const Layout = ({children}) => (
  <Box as="main" pb={8}>
    <head>
      <title>Itta&apos;s Portfolio</title>
    </head>
    <Container fontSize="xl" maxW="container.md">
      <Header />
        {children}
      <Footer />
    </Container>
  </Box>
)

export default Layout;