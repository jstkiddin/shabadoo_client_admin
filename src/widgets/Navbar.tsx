import { Box, Typography } from '@mui/material'
import OutlinedButton from '@shared/components/buttons/OutlinedButton'
import { useCallback, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const navbarItems = [
  { path: '/dashboard', name: 'Дашборд' },
  { path: '/schedule', name: 'Розклад' },
  { path: '/teachers', name: 'Вчителі' },
  { path: '/students', name: 'Студенти' },
  { path: '/groups', name: 'Групи' },
]

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [isActive, setIsActive] = useState<string>(location.pathname)

  const onClickAction = useCallback((path: string) => {
    setIsActive(path)
    navigate(path)
    return path
  }, [])

  return (
    <NavbarBox>
      <MenuBox>
        {navbarItems.map(item => (
          <OutlinedButton onClick={() => onClickAction(item.path)}>
            <StyledTypography active={isActive == item.path} fontSize={14}>
              {item.name}
            </StyledTypography>
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

const StyledTypography = styled(Typography)<{ active: boolean }>`
  ${({ active }) => (active ? 'color:#a44aff' : '')}
`
