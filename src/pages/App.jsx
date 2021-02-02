import React from 'react';

import './App.css';

import { Home, About, Projects, Contact } from '../components/landing/';
import { SEO, Container, Footer, NavBar } from '../components/common';

export const App = (props) => {

  const home = {
    title: "Hi There !",
    subTitle: "I’m Guillaume and I’m an engineering student",
    text: "Checkout my projects below",
  };

  const NavBarLinks = [
    { text: "About"    , href: "#about"    },
    { text: "Projects" , href: "#projects" },
    { text: "Contact"  , href: "#contact"  }
  ];
  
  return (
    <div className=" flex-column vh-100">

      <NavBar links={NavBarLinks}/>

      <Container className="p-0 flex-1 wrapper py-5" fluid={true}>
        <Home title={home.title} subTitle={home.subTitle} text={home.text} />
        <About />
        <Projects />
        <Contact />

      </Container>

      <Footer />
      <SEO />
    </div>
  );
}

export default App;