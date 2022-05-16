import { Button, Container, Row, Col, Navbar, Nav } from "react-bootstrap";

const Layout = () => {
    return (
      <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />{" "}
        </Head>

        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">React Next Js</Navbar.Brand>
            <Nav className="me-auto">
              <Link href="/" passHref>
                <Nav.Link>Home</Nav.Link>
              </Link>
              <Link href="/about" passHref>
                <Nav.Link>About</Nav.Link>
              </Link>
              <Link href="/index" passHref>
                <Nav.Link>Contact Us</Nav.Link>
              </Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
}
 
export default Layout;