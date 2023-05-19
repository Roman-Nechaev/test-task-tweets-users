import defaultAvatar from '../assets/img/Hansel.png';

export const checkAvatar = img => {
  if (!img) {
    return defaultAvatar;
  }
  return img;
};
