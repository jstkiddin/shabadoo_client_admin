import { Box } from '@mui/material'
import { JSX } from 'react'
import styled from 'styled-components'

function BaseWrapper({
  children,
}: {
  children: string | JSX.Element | JSX.Element[] | null
}) {
  return <Wrapper>{children}</Wrapper>
}

export default BaseWrapper

const Wrapper = styled(Box)`
  width: 100%;
  height: 100%;
`
