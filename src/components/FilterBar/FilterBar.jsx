import { useState } from 'react';
import {
  Container,
  Navbar,
  NavbarList,
  NavbarItem,
  NavbarItemBtn,
} from './FilterBar.styled';
import { BsFilterCircle } from 'react-icons/bs';
import { DropdownMenu } from '../DropdownMenu/DropdownMenu';
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

//  <NavbarItem>
//             <button type="button">Follow</button>
//           </NavbarItem>
//           <NavbarItem>
//             <button type="button">Followings show all</button>
//           </NavbarItem>
