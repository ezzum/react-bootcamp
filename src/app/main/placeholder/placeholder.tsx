/* eslint-disable react/prop-types */
import React from 'react'

import { Wrapper, Img, Text } from './placeholder-styled'
import { IProps } from './interfaces'

const Placeholder: React.FC<IProps> = ({ border }) => {
  return (
    <Wrapper className="placeholder">
      <Img styled={border} className="placeholder__img"></Img>
      <Text className="placeholder__text">
        Fill in all the Fields and weather wil be displayed
      </Text>
    </Wrapper>
  )
}

export default Placeholder
