import React from 'react';

import styles from './Avatar.module.css';
import ImgAvatar from '../../..//assets/image-avatar.jpg';

interface AvatarProps { }

const Avatar = (props: AvatarProps) => {
  return (
    <img className={styles.avatar} src={ImgAvatar.src} alt='avatar' />
  );
};

export default Avatar;