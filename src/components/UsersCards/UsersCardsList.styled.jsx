import styled from '@emotion/styled';

export const WrapperCards = styled.div`
  max-width: 1185px;
  max-height: 470px;
  padding: 15px;
  margin: 0 auto;
  overflow-x: hidden;
  overflow-y: hidden;
  margin-top: 50px;
  border: 1px solid rgba(227, 227, 227, 1);
  border-radius: 10px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;

export const Cards = styled.ul`
  display: flex;
  overflow-x: hidden;
  list-style: none;
  padding: 0;
  margin: 0;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

export const ContainerBtn = styled.div`
  text-align: center;
  /* background-color: aliceblue; */

  padding: 40px;
`;

export const BtnLoadMore = styled.button`
  text-decoration: none;

  position: relative;
  margin: auto;
  padding: 12px 18px;
  transition: all 0.2s ease;
  border: none;
  background: none;
  margin-right: 30px;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 50px;
    background: #b1dae7;
    width: 45px;
    height: 45px;
    transition: all 0.3s ease;
  }
  span {
    position: relative;
    font-family: 'Ubuntu', sans-serif;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.05em;
    color: #234567;
  }
  svg {
    position: relative;
    top: 0;
    margin-left: 10px;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: #234567;
    stroke-width: 2;
    transform: translateX(-5px);
    transition: all 0.3s ease;
  }
  :hover:before {
    width: 100%;
    background: #b1dae7;
  }
  :hover svg {
    transform: translateX(0);
    transform: rotate(-0.25turn);
  }
  &.active {
    transform: scale(0.95);

    svg {
      transform: translateX(0);
      transform: rotate(0.25turn);
    }
    :before {
      width: 100%;
      background: #b1dae7;
    }
  }
  :disabled {
    cursor: not-allowed;
  }
`;

export const BtnBack = styled.button`
  text-decoration: none;

  position: relative;
  margin: auto;
  padding: 12px 18px;
  transition: all 0.2s ease;
  border: none;
  background: none;
  margin-right: 30px;

  :before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    border-radius: 50px;
    background: #b1dae7;
    width: 45px;
    height: 45px;
    transition: all 0.3s ease;
  }
  span {
    position: relative;
    font-family: 'Ubuntu', sans-serif;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.05em;
    color: #234567;
  }
  svg {
    position: relative;
    top: 0;
    margin-right: 10px;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: #234567;
    stroke-width: 2;
    transform: rotate(-180deg);
    transition: all 0.3s ease;
  }
  :hover:before {
    width: 100%;
    background: #b1dae7;
  }
  :hover svg {
    transform: translateX(1.4turn);

    transform: rotate(-90deg);
  }
  &.active {
    transform: scale(0.5turn);

    svg {
      transform: rotate(90deg);
    }
    :before {
      width: 100%;
      background: #b1dae7;
    }
  }
`;
