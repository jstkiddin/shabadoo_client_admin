import { Box, Typography } from '@mui/material'
import OutlinedButton from '@shared/components/buttons/OutlinedButton'
import styled from 'styled-components'

const NavbarNames = ['Дашборд', 'Розклад', 'Вчителі', 'Студенти', 'Групи']

function Navbar() {
  return (
    <NavbarBox>
      <MenuBox>
        {NavbarNames.map(name => (
          <OutlinedButton>
            <Typography fontSize={14}>{name}</Typography>
          </OutlinedButton>
        ))}
      </MenuBox>
    </NavbarBox>
  )
}

export default Navbar

const NavbarBox = styled(Box)`
  width: 100vw;
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ffffff;

  border-bottom: rgba(164, 74, 255, 0.08) 2px solid;
`
const MenuBox = styled(Box)`
  width: 50vw;
  height: 4rem;

  display: flex;
  align-items: center;

  padding: 0rem 2rem;
  gap: 0.5rem;
`
