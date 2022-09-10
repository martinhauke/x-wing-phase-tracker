import React, { memo } from 'react'
import StyledHeader from './__styled__/Header'
import Heading from './__styled__/Heading'

const Header = () => {
  return (
    <StyledHeader>
      <Heading>X-Wing Phase Tracker</Heading>
    </StyledHeader>
  )
}

export default memo(Header)
