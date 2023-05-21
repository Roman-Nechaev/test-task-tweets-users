import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const LinkNav = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  font-size: 22px;
  line-height: 24px;
  cursor: pointer;
  transition: 0.5s;
  color: #5736a3;
  text-shadow: 1px 0 1px #ffffff, 0 1px 1px #ffffff, -1px 0 1px #ffffff,
    0 -1px 1px #ffffff;
  border-radius: 10px;

  :hover,
  :focus {
    color: #ffffff;
  }
  &.active {
    color: #5a5959;
    background-color: #5cd3a783;
    backdrop-filter: blur(10px);
  }
`;
