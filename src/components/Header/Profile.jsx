import React from 'react';
import { Modal } from 'components/Modal';
import { useModal } from 'hooks/useModal';

import EditProfile from './EditProfile';
import {
  DivInfoUserStyled,
  TextStyled,
  DivUserImgStyled,
  LinkStyled,
  AvatarImg,
} from './Profile.styled';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/auth/selectors';
import { Svg } from 'components/SvgIcon/SvgIcon';

const Profile = () => {
  const { name, avatarURLsmall } = useSelector(selectUser);

  const { isModalOpen, openModal, closeModal } = useModal();

  const onClickModalOpen = () => {
    openModal();
  };

  return (
    <>
      <DivInfoUserStyled>
        <TextStyled>{name}</TextStyled>
        <DivUserImgStyled>
          <LinkStyled onClick={onClickModalOpen}>
            {avatarURLsmall ? (
              <AvatarImg
                width={32}
                height={32}
                src={avatarURLsmall}
                alt="userlogo"
              />
            ) : (
              <Svg w={32} h={32} icon="user" />
            )}
          </LinkStyled>
        </DivUserImgStyled>
      </DivInfoUserStyled>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <EditProfile closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default Profile;
