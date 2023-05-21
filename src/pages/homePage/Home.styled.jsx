import styled from 'styled-components';

import {
  RiTelegramLine,
  RiGithubFill,
  RiLinkedinBoxLine,
} from 'react-icons/ri';

export const Container = styled.div`
  z-index: 4;
  padding-top: 80px;
  padding-bottom: 15px;
  width: 100%;
  min-height: 500px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
`;

export const Title = styled.h1`
  text-align: center;

  font-size: 2.5em;
  font-weight: 900;
  text-decoration-line: underline;
  color: #373737;

  margin-bottom: 10px;
  text-shadow: 1px 0 1px #ffffff, 0 1px 1px #ffffff, -1px 0 1px #ffffff,
    0 -1px 1px #ffffff;
`;

export const Text = styled.p`
  text-align: center;
  padding: 15px;
  font-size: 1.5em;
  font-weight: 600;

  color: #373737;

  margin-bottom: 10px;
  text-shadow: 1px 0 1px #ffffff, 0 1px 1px #ffffff, -1px 0 1px #ffffff,
    0 -1px 1px #ffffff;
`;

export const WrapperSocial = styled.ul`
  display: flex;
  justify-content: center;

  align-self: flex-end;
`;

export const SocialLi = styled.li`
  padding-right: 25px;
`;

export const SocialLink = styled.a``;

export const RiTelegramLineSt = styled(RiTelegramLine)`
  border-radius: 100%;
  width: 32px;
  height: 32px;
  color: #373737;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  transition: 0.2s;
  :hover,
  :focus {
    background-color: #00b3ff5a;
    color: #ffffff;
  }
`;

export const RiLinkedinBoxLinSt = styled(RiLinkedinBoxLine)`
  border-radius: 5px;
  width: 32px;
  height: 32px;
  color: #373737;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  transition: 0.2s;
  :hover,
  :focus {
    background-color: #00b3ff5a;
    color: #ffffff;
  }
`;

export const RiGithubFillSt = styled(RiGithubFill)`
  border-radius: 100%;
  width: 32px;
  height: 32px;
  color: #373737;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  transition: 0.2s;
  :hover,
  :focus {
    background-color: #00b3ff5a;
    color: #ffffff;
  }
`;
