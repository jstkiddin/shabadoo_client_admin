import { Box, Card } from '@mui/material'
import { JSX } from 'react'
import styled from 'styled-components'

function CardBackground({
  children,
}: {
  children: string | JSX.Element | JSX.Element[] | null
}) {
  return <Background>{children}</Background>
}

export default CardBackground

const Background = styled(Box)`
  width: 100%;
  height: 90vh;

  position: relative;

  display: flex;
  justify-content: center;
`
