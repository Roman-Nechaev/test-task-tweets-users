import styled from '@emotion/styled';

export const WrapperCards = styled.div`
  max-width: 1200px;
  padding: 5px;

  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  padding-top: 80px;
`;

export const Cards = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 0;
`;

export const ContainerBtn = styled.div`
  text-align: center;
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
  text-shadow: 1px 0 1px #ffffff, 0 1px 1px #ffffff, -1px 0 1px #ffffff,
    0 -1px 1px #ffffff;

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
    stroke: #ffffff;
    stroke-width: 2;
    transform: translateX(-5px);
    transition: all 0.3s ease;
  }
  :hover:before {
    width: 100%;
    background: #5cd3a783;
  }
  :hover svg {
    transform: translateX(0);
    transform: rotate(-0.25turn);
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
  text-shadow: 1px 0 1px #ffffff, 0 1px 1px #ffffff, -1px 0 1px #ffffff,
    0 -1px 1px #ffffff;

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
    stroke: #ffffff;

    stroke-width: 2;
    transform: rotate(-180deg);
    transition: all 0.3s ease;
  }
  :hover:before {
    width: 100%;
    background: #5cd3a783;
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
      background: #5cd3a783;
    }
  }
`;
