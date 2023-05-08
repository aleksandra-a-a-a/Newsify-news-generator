import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setView } from "./Redux/reducer";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as AiIcons from "react-icons/ai";
import SidebarData from "./SidebarData";
import Submenu from "./SubMenu";
import { Nav, SidebarNav, SidebarWrap, NavMenu, ToggleViewButton } from "../Styles/NavbarStyles"


const NavIcon = styled(Link)`
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
  padding: 1rem;

  @media (max-width: 414px) {
    font-size: 1rem;
  }
`;


const NavTitle = styled(Link)`
  margin-left: 9rem;

  @media (max-width: 414px) {
    margin-left: 0;
  }

   img {
    width: 14rem;
   }
`;

function Navbar() {
  const [note, setNote] = useState(false);
  const showNote = () => setNote(!note);

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const dispatch = useDispatch();
  const view = useSelector((state) => state.view);
  

  const toggleView = () => {
    const newView = view === "list" ? "tile" : "list";
    dispatch(setView(newView));
  };

  return (
    <>
      <Nav>
        <NavIcon to="#">
          <FaIcons.FaBars onClick={showSidebar} />
        </NavIcon>
        <NavTitle to="/Homepage">
          <img alt='logo' src='/logo.webp'/>
        </NavTitle>
        <NavMenu to="#">
          <ToggleViewButton onClick={toggleView}>
            {view === "list" ? (
              <IoIcons.IoMdGrid />
            ) : (
              <RiIcons.RiMenuUnfoldLine />
            )}
            <span>{view === "list" ? "Tile view" : "List view"}</span>
          </ToggleViewButton>
        </NavMenu>
      </Nav>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <NavIcon to="#">
            <AiIcons.AiOutlineClose onClick={showSidebar} />
          </NavIcon>
          {SidebarData.map((country, index) => {
            return <Submenu country={country} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </>
  );
}

export default Navbar;
