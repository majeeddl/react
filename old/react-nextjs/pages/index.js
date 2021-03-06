import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import { Button, Container, Row, Col, Navbar, Nav } from "react-bootstrap";

export default function Home() {
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

    // <Container>
    //   <Row>
    //     <Col>
    //       <div className={styles.container}>
    //         <Head>
    //           <title>Create Next App</title>
    //           <meta name="description" content="Generated by create next app" />
    //           <link rel="icon" href="/favicon.ico" />
    //         </Head>

    //         <Button>Button One</Button>
    //         <main className={styles.main}>
    //           <h1 className={styles.title}>
    //             Welcome to <a href="https://nextjs.org">Next.js!</a>
    //           </h1>
    //         </main>

    //         <footer className={styles.footer}></footer>
    //       </div>
    //     </Col>
    //   </Row>
    // </Container>
  );
}
