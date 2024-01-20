import styled from 'styled-components';

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const DropZoneContainer = styled.div`
  border: 2px dashed #cccccc;
  width: 310px;
  border-radius: 4px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  margin: 20px;
`;

export const DropZoneText = styled.p`
  font-size: 16px;
  color: #9fbaae;
`;
