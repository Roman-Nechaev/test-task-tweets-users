import styled from '@emotion/styled';

export const Dropdown = styled.div`
  position: absolute;
  top: 50px;
  width: 180px;
  height: 200px;
  transform: translateX(-45%);
  background-color: #b4b4b439;
  border: 1px solid #474a4d;
  backdrop-filter: blur(10px);
  border-radius: 8px;
  padding: 5px;
  overflow: hidden;
  transition: height 500ms ease;
  animation: show 1s;
  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const MenuItems = styled.a`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  transition: background 500ms;

  padding: 0.5rem;
`;
