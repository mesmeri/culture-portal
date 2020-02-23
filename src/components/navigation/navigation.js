import React from "react";
import { navigate } from "gatsby"
import { Navbar, Nav } from "react-bootstrap";
import LangMenu from "../LangMenu/LangMenu";

const Navigation = () => {
  const [lang, setLang] = React.useState('');

  const onLinkClickHandler = (e, path) => {
    console.log('lang', lang)
    e.preventDefault();
    const target = path + lang;
    navigate(target);
  }

  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Belarusian Filmmakers</Navbar.Brand>
      <LangMenu setLang={setLang} />
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="custom-mr_left">
          <Nav.Link href="/" onClick={(e) => onLinkClickHandler(e, '')}>Main</Nav.Link>
          <Nav.Link href="/" onClick={(e) => onLinkClickHandler(e, 'temp/filmmakers/')}>Filmmakers</Nav.Link>
          <Nav.Link href="/temp/author">Our team</Nav.Link>
          <Nav.Link href="/">Worklog</Nav.Link>
          <Nav.Link href="/" onClick={(e) => onLinkClickHandler(e, 'temp/styleguide/')}>Styleguide</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
