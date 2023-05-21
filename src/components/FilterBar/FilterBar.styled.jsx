import styled from '@emotion/styled';

export const Container = styled.div``;

export const Navbar = styled.nav``;

export const NavbarList = styled.ul`
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const NavbarItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const setColorBtn = props => {
  return props.flag ? '#ffffff' : '#00ff1a;';
};

export const NavbarItemBtn = styled.button`
  background: transparent;
  border: none;
  width: 40px;
  height: 40px;
  transition: all 500ms;
  color: ${setColorBtn};
  background-color: ${props => {
    if (props.flag) return '#5cd3a783';
  }};
  border-radius: 50px;
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
  }
  :hover {
    background-color: #5cd3a783;
    color: #ffffff;
  }
`;
