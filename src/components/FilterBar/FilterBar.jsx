import { useState } from 'react';
import { BsFilterCircle } from 'react-icons/bs';

import { DropdownMenu } from '../DropdownMenu/DropdownMenu';

import {
  Container,
  Navbar,
  NavbarList,
  NavbarItem,
  NavbarItemBtn,
} from './FilterBar.styled';

export const FilterBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Navbar>
        <NavbarList>
          <NavbarItem>
            <NavbarItemBtn
              onClick={() => {
                setOpen(!open);
              }}
              flag={open}
            >
              <BsFilterCircle />
            </NavbarItemBtn>
            {open && <DropdownMenu />}
          </NavbarItem>
        </NavbarList>
      </Navbar>
    </Container>
  );
};
