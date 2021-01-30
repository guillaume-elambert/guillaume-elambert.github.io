import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import {
  Navbar,
  Nav,
} from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';


import './App.css';

import Home from '../components/landing/Home';
import About from '../components/landing/About';
import Contact from '../components/landing/Contact';
import Projects from '../components/landing/Projects/Projects';

import Footer from '../components/common/Footer';
import { SEO, Container, IOSScreen } from '../components/common';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: "Guillaume ELAMBERT",
      headerLinks: [{
        title: "Home",
        path: "/"
      },
      {
        title: "À propos",
        path: "/about"
      },
      {
        title: "Contact",
        path: "/contact"
      },
      ],
      home: {
        title: "Hi There !",
        subTitle: "I’m Guillaume and I’m an engineering student",
        text: "Checkout my projects below"

      },
      about: {
        title: "À propos de moi"

      },
      contact: {
        title: "Les't talk",

      }

    }
  }


  render() {

    return (
      <Router>
        <div className=" flex-column vh-100">

          <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/" className="fs-3">Guillaume Elambert</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto lead">
                <Nav.Link as={AnchorLink} href="#projects">Home</Nav.Link>
                <Nav.Link as={AnchorLink} href="/about">About</Nav.Link>
                <Nav.Link as={AnchorLink} href="/contact">Contact</Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Container className="p-0 flex-1 wrapper py-5" fluid={true}>



            <Route path="/" exact render={() =>
              <>
                <Home
                  title={this.state.home.title}
                  subTitle={this.state.home.subTitle}
                  text={this.state.home.text} />

                <Projects />
              </>

            } />


            <Route path="/about" exact render={() =>
              <About
                title={this.state.about.title}
                subTitle={this.state.about.subTitle} />
            } />


            <Route path="/contact" exact render={() =>
              <Contact
                title={this.state.contact.title} />
            } />


          </Container>
          <Footer />
          <SEO />
        </div>

      </Router>
    );
  }
}

export default App;