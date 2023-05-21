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
  position: fixed;
  text-decoration: none;
  top: 80px;
  left: 20px;

  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.05em;
  padding: 15px;
  display: inline-flex;
  border-radius: 8px;
  transition: all 0.5s ease;
  z-index: 10;

  color: #ffffff;
  text-shadow: 1px 0 1px #000000, 0 1px 1px #000000, -1px 0 1px #ffffff,
    0 -1px 1px #000000;
  :hover {
    color: #000000;
    border: 2px solid #b1dae7;
    background-color: #5cd3a783;
  }
  :hover svg {
    transform: scale(1.2);
  }
`;

export const AiOutlineArrowLeftSt = styled(AiOutlineArrowLeft)`
  margin-right: 8px;
  width: 18px;
  height: 18px;
`;
export const TitleError = styled.h1`
  padding-top: 15px;
  text-align: center;
  text-decoration-line: underline;
  color: #000000;
  text-shadow: 1px 0 1px #ffffff, 0 1px 1px #ffffff, -1px 0 1px #ffffff,
    0 -1px 1px #ffffff;
`;
