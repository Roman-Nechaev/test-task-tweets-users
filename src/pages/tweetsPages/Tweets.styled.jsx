import styled from '@emotion/styled';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

export const BgGradient = styled.div`
  padding-top: 15px;
  background-image: linear-gradient(
    to right,
    rgba(52.5, 52.5, 73.5, 1) calc((50vw - 170px) - 340px),
    rgba(52.5, 52.5, 73.5, 0.84) 50%,
    rgba(52.5, 52.5, 73.5, 0.84) 100%
  );
`;

export const BackLink = styled(NavLink)`
  text-decoration: none;
  color: #ff0a0a;
  margin-left: 25px;
  border: 2px solid rgb(255, 255, 255);
  padding: 5px;
  display: inline-flex;
  border-radius: 8px;
  transition: all 0.4s ease;

  :hover {
    color: #234567;
    border: 2px solid #b1dae7;
    background-color: #b1dae7;
  }
  :hover svg {
    transform: scale(1.2);
  }
`;

export const AiOutlineArrowLeftSt = styled(AiOutlineArrowLeft)`
  padding-right: 8px;
  width: 18px;
  height: 18px;
`;
