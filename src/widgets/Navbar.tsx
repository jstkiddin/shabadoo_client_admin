import {
  Box,
  IconButton,
  List,
  ListItem,
  Tooltip,
  Typography,
} from '@mui/material'
import OutlinedButton from '@shared/components/buttons/OutlinedButton'
import { useCallback, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import {
  ArrowBackIosNew,
  CalendarMonth,
  Dashboard,
  RecentActors,
  School,
  Group,
} from '@mui/icons-material'

const navbarItems = [
  {
    path: '/dashboard',
    name: 'Дашборд',
    icon: <Dashboard />,
  },
  { path: '/schedule', name: 'Розклад', icon: <CalendarMonth /> },
  { path: '/teachers', name: 'Вчителі', icon: <RecentActors /> },
  { path: '/students', name: 'Студенти', icon: <School /> },
  { path: '/groups', name: 'Групи', icon: <Group /> },
]

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [isActive, setIsActive] = useState<string>(location.pathname)
  const [isOpen, setIsOpen] = useState<boolean>(true)

  const onClickAction = useCallback((path: string) => {
    setIsActive(path)
    navigate(path)
    return path
  }, [])

  return (
    <>
      <NavbarBox open={isOpen}>
        <MenuBox open={isOpen}>
          {navbarItems.map(item => (
            <OutlinedButton
              id={`area-` + item.path.split('/')[1]}
              active={isActive == item.path}
              onClick={() => onClickAction(item.path)}
              startIcon={item.icon}
            >
              <StyledTypography open={isOpen} fontSize={14}>
                {item.name}
              </StyledTypography>
            </OutlinedButton>
          ))}
        </MenuBox>
      </NavbarBox>
      <Tooltip title="Click to see loading">
        <StyledIconButton
          size="small"
          open={isOpen}
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        >
          <ArrowBackIosNew fontSize="inherit" />
        </StyledIconButton>
      </Tooltip>
    </>
  )
}

export default Navbar

const NavbarBox = styled(Box)<{ open: boolean }>`
  postition: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: ${({ open }) => (open ? '200px' : '60px')};
  height: 100%;

  transition: max-width 0.3s ease !important;
  background-color: #ffffff;
  border-right: rgba(164, 74, 255, 0.08) 2px solid;
`
const MenuBox = styled(List)<{ open: boolean }>`
  postition: relative;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  transition: min-width 0.3s ease !important;

  min-width: ${({ open }) => (open ? '200px' : '50px')};
  overflow: hidden;
`

const StyledTypography = styled(Typography)<{ open: boolean }>`
  transition: opacity 0.3s ease !important;
  opacity: ${({ open }) => (open ? '1 !important' : '0 !important')};
`

const StyledIconButton = styled(IconButton)<{ open: boolean }>`
  position: absolute;
  top: 1rem;
  left: -1rem;

  width: 2rem;
  height: 2rem;

  border: 1px solid #00000020 !important;
  background: #ffffff !important;
  transition: transform 0.3s ease !important;

  transform: rotate(${({ open }) => (open ? '180deg' : '0deg')});

  &:hover {
    background: #d8d8d8 !important;
  }
`
