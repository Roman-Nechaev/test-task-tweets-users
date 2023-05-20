import styled from '@emotion/styled';

const setColorBtn = props => {
  console.log(props.selected);
  if (props.selected) {
    return '#5cd3a8;';
  }
  return '#ebd8ff;';
};

export const Container = styled.div`
  text-align: center;
`;

export const FilterBtn = styled.button`
  font-family: 'Montserrat';

  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  color: #373737;
  text-transform: uppercase;

  width: 196px;
  height: 40px;

  border: none;
  background: ${setColorBtn};

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  transition: 0.5s;
  cursor: pointer;
  :hover {
    background: #5cd3a8;
  }
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  span {
    color: #ff0033;
  }
`;
