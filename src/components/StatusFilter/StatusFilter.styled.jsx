import styled from '@emotion/styled';

export const Container = styled.div``;

export const FilterBtn = styled.button`
  text-decoration: none;

  position: relative;
  margin: auto;

  padding: 12px 18px;
  transition: all 0.2s ease;
  border: none;
  background: none;
  margin-bottom: 10px;
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
    width: ${props => props.selected && '100%'};
    background: ${props => props.selected && '#5cd3a783'};
  }
  span {
    position: relative;
    font-family: 'Ubuntu', sans-serif;
    font-size: 16px;
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
export const CounterFollow = styled.span`
  margin-left: 10px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  color: #ffffff;
  text-shadow: 1px 0 1px #000000, 0 1px 1px #000000, -1px 0 1px #000000,
    0 -1px 1px #000000;
`;
