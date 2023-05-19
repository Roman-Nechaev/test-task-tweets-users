import styled from '@emotion/styled';

export const WrapperCards = styled.div`
  max-width: 1200px;
  max-height: 470px;
  padding: 15px;
  margin: 0 auto;
  overflow-x: hidden;
  overflow-y: scroll;
  border: 1px solid rgba(227, 227, 227, 1);
`;

export const Cards = styled.ul`
  display: flex;

  /* flex-wrap: wrap;
  gap: 10px;
  padding: 0;
  list-style: none; */

  display: flex;
  overflow-x: auto;
  list-style: none;
  padding: 0;
  margin: 0;
`;
