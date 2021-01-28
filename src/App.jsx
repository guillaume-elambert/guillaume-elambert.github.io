import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import {
  Container,
  Navbar,
  Nav,
} from 'react-bootstrap';


import './App.css';

import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';



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
        title: "Be relentless",
        subTitle: "Projects that make a difference",
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
        
        <div className="d-flex flex-column vh-100">
          <Container className="p-0 flex-1" fluid={true}>
            <Navbar bg="dark" variant="dark" expand="lg">
              <Navbar.Brand href="/" className="fs-3">Guillaume Elambert</Navbar.Brand>

              <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto lead">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>

                </Nav>
              </Navbar.Collapse>
            </Navbar>


            <Route path="/" exact render={() =>
              <Home
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                text={this.state.home.text} />
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

        </div>

      </Router>
    );
  }
}

export default App;