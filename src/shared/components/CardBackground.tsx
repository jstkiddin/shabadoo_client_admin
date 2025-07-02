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

const Background = styled(Card)`
  width: 97vw;
  height: 100%;

  position: relative;

  margin: 0.5rem 1rem;
  // boder-radius: 2rem;

  box-shadow: 2px 9px 35px 0px rgba(0, 0, 0, 0.69);
`
