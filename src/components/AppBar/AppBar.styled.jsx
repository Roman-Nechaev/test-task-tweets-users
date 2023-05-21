import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  border-bottom: 1px solid #2a363b;
  padding-left: 20px;
  padding-right: 20px;

  background-color: #b4b4b439;
  backdrop-filter: blur(5px);
  z-index: 10;
`;
