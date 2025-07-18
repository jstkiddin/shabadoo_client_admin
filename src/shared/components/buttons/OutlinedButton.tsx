import { Button } from '@mui/material'
import { JSX } from 'react'
import styled from 'styled-components'

type Props = {
  children: string | JSX.Element | JSX.Element[] | null
  id: string
  active: boolean
  onClick: () => {}
  startIcon?: JSX.Element
  endIcon?: JSX.Element
}

function OutlinedButton({
  startIcon,
  endIcon,
  active,
  children,
  id,
  onClick,
}: Props) {
  return (
    <CustomButton
      active={active}
      startIcon={startIcon}
      endIcon={endIcon}
      id={id}
      onClick={(e: any) => onClick()}
      variant="text"
    >
      {children}
    </CustomButton>
  )
}

export default OutlinedButton

const CustomButton = styled(Button)<{ active: boolean }>`
  position: relative;
  display: flex;
  justify-content: flex-start !important;

  padding-left: 1.5rem !important;

  color: ${({ active }) => (active ? '#a44aff' : '#000000')} !important;
  border-radius: 0rem !important;

  &:hover {
    background: rgba(164, 74, 255, 0.08) !important;
  }

  &:hover:after {
    width: 100%;
  }

  &::after {
    content: '';
    height: 2px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 0%;
    background-color: #a44aff;

    transition: width, 0.5s;
  }
`
