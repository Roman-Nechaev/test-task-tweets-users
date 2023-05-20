import { useSelector } from 'react-redux';

import { selectUsersCount } from '../../redux/selectors';

export const UserCounter = () => {
  const { Follow, Followings } = useSelector(selectUsersCount);

  return (
    <div>
      <p>Follow: {Follow}</p>
      <p>Followings: {Followings}</p>
    </div>
  );
};
