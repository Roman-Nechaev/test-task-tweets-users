import { StatusFilter } from '../StatusFilter/StatusFilter';

import { Dropdown, MenuItems } from './DropdownMenu.styled';

export const DropdownMenu = () => {
  return (
    <Dropdown>
      <MenuItems>
        <StatusFilter />
      </MenuItems>
    </Dropdown>
  );
};
