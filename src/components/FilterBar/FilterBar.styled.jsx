import styled from '@emotion/styled';

export const Container = styled.div`
  /* display: flex; */
`;

export const Navbar = styled.nav`
  height: 60px;

  padding: 0 16px;
`;

export const NavbarList = styled.ul`
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const NavbarItem = styled.ul`
  width: calc(60px * 0.8);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const setColorBtn = props => {
  return props.flag ? '#ae00ff' : '#ff006f;';
};
export const NavbarItemBtn = styled.button`
  background: transparent;
  border: none;
  width: 40px;
  height: 40px;
  transition: all 500ms;
  color: ${setColorBtn};
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
  }
  :hover {
    color: #ae00ff;
  }
`;
