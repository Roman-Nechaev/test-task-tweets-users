import { Dropdown, MenuItems } from './DropdownMenu.styled';

export const DropdownMenu = () => {
  return (
    <Dropdown>
      <MenuItems>All</MenuItems>
      <MenuItems>Follow</MenuItems>
      <MenuItems>Followings</MenuItems>
    </Dropdown>
  );
};
