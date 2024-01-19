import styled from 'styled-components';

export const OverlayStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-inline: 20px;
  background-color: ${({ $isLogoModal }) =>
    $isLogoModal ? 'transparent' : '#000000cc'};
  transition: background-color 500ms linear;
`;
