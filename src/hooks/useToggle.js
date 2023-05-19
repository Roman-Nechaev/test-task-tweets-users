import { useState } from 'react';

export const useToggle = () => {
  const [isClick, setIsClick] = useState(false);

  //   const open = () => setIsClick(true);
  //   const close = () => setIsClick(false);
  const toggle = () => setIsClick(isClick => !isClick);

  return { isClick, toggle };
};
