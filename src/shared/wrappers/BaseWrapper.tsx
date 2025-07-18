import { Box } from '@mui/material'
import { JSX } from 'react'
import styled from 'styled-components'

type WrappersProps = {
  children: string | JSX.Element | JSX.Element[] | null
}

export function BaseWrapper({ children }: WrappersProps) {
  return <Wrapper>{children}</Wrapper>
}

export const AppWrapper = ({ children }: WrappersProps) => {
  return <GeneralWrapper>{children} </GeneralWrapper>
}

const Wrapper = styled(Box)`
  width: 100%;
`
const GeneralWrapper = styled(Box)`
  position: relative;

  display: flex;
  justify-content: start;

  height: 99.8vh;
`
