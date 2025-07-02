import { Button } from '@mui/material'
import { JSX } from 'react'
import styled from 'styled-components'

type Props = {
  children: string | JSX.Element | JSX.Element[] | null

  onClick: () => {}
}

function OutlinedButton({ children, onClick }: Props) {
  return (
    <CustomButton onClick={(e: any) => onClick()} variant="text">
      {children}
    </CustomButton>
  )
}

export default OutlinedButton

const CustomButton = styled(Button)`
  color: #000000 !important;
  border-radius: 1rem !important;
  height: 80%;
  width: 40%;

  display: flex;
  justify-content: center;

  &:hover {
    background: rgba(164, 74, 255, 0.08) !important;
  }

  &:hover:after {
    width: 88%;
  }

  &::after {
    content: '';
    height: 2px;
    position: absolute;
    bottom: 0px;
    left: 0.7rem;
    width: 0%;
    background-color: #a44aff;

    transition: width, 0.5s;
  }
`
