import styled from '@emotion/styled';

export const Dropdown = styled.div`
  position: absolute;
  top: 50px;
  width: 200px;
  transform: translateX(-45%);
  background-color: #1d69b5;
  border: 1px solid #474a4d;
  border-radius: 8px;
  padding: 16px;
  overflow: hidden;
  transition: height 500ms ease;
`;

export const MenuItems = styled.p`
  align-items: center;
  text-align: center;
  border-radius: 8px;
  transition: background 500ms;
  color: #ffffff;
  padding: 0.5rem;
  cursor: pointer;
  :hover {
    background-color: #525357;
  }
`;
