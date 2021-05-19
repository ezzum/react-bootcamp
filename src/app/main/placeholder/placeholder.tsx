import React from 'react'

import { Wrapper, Img, Text } from './placeholderStyled'

const Placeholder: React.FC = () => {
  return (
    <Wrapper className="placeholder">
      <Img border={'1px dashed #8083a4'} className="placeholder__img"></Img>
      <Text className="placeholder__text">
        Fill in all the Fields and weather wil be displayed
      </Text>
    </Wrapper>
  )
}

export default Placeholder
