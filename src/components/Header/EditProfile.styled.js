import styled from '@emotion/styled';
import { ModalContent } from 'components/Modal/Modal.styled';
import { devices } from 'styles';

export const TextStyled = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
  color: ${props => props.theme.colors.titleColor};
  margin-bottom: 24px;
`;

export const DivItem = styled.div`
  display: flex;
  justify-content: center;
`;

export const DivUserImgStyled = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.backgroundUserImgWrapper};
  position: relative;
  margin-bottom: 25px;
  color: ${props => props.theme.colors.iconUserColor};
`;

export const AvatarImg = styled.img`
  border-radius: 8px;
  object-fit: cover;
  height: 250px;
`;

export const DivIconPlus = styled.div`
  position: absolute;
  bottom: -12px;
  right: 113px;
  width: 24px;
  height: 24px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.backgroundAddIcon};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.colorAddIcon};
`;

export const ModalContentStyled = styled(ModalContent)`
  @media screen and (${devices.tablet}) {
    width: 400px;
  }
`;
