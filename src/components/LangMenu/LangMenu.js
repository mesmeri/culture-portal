import React from 'react';
import {  NavDropdown } from 'react-bootstrap';
import { onLinkClickHandler } from "../../utils/language"

const LangMenu = ({ location, lang }) => {




  return (
    <NavDropdown alignRight
      id="dropdown-menu-align-right"
      title={lang}>
      <NavDropdown.Item  onClick={()=>onLinkClickHandler('/en/', location.pathname, lang)} data-lang="en">EN</NavDropdown.Item>
      <NavDropdown.Item  onClick={()=>onLinkClickHandler('', location.pathname, lang)} data-lang="be">BE</NavDropdown.Item>
      <NavDropdown.Item  onClick={()=>onLinkClickHandler('/ru/', location.pathname, lang)} data-lang="ru">RU</NavDropdown.Item>
    </NavDropdown>
  )
}

export default LangMenu;
