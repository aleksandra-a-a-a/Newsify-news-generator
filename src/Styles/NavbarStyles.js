import styled from "styled-components";

const Nav = styled.div`
  background: #52796F;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #52796F;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;


const SidebarWrap = styled.div`
  width: 100%;
`;

const NavMenu = styled.div`
  display: flex;
  color: whitesmoke;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;

  .popup-btn {
    background-color: #d5eb2a;
    padding: 0.6rem;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    margin-right: 2rem;
  
  @media (max-width: 414px) {
    font-size: 0.7rem;
    padding: 0.6rem;
    margin-right: 1rem;
  }

`;

const ToggleViewButton = styled.button`
  font-size: 1.2rem;
  background-color: transparent;
  color: whitesmoke;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  @media (max-width: 414px) {
    font-size: 0.7rem;
    margin-left: 0;
  }

  svg {
    margin-right: 0.5rem;
  }
`;

export { Nav, SidebarNav, SidebarWrap, NavMenu, ToggleViewButton }