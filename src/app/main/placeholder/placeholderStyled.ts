import styled from 'styled-components'

import placeholderImg from '../../../assets/Placeholder/Academy-Weather-bg160.png'
import { IPropsImg } from './interfaces'

export const Wrapper = styled.div`
  width: 440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 92px;
  left: 50%;
  transform: translate(-50%, 0);
`

export const Img = styled.div`
  background-image: url(${placeholderImg});
  width: 160px;
  height: 160px;
  margin-bottom: 30px;
  letter-spacing: 0.7px;
  border: ${(props: IPropsImg) => props.styled};
`
export const Text = styled.p`
  color: #8083a4;
  font-size: 16px;
  font-family: Ubuntu-Bold;
`
