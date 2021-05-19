import styled from 'styled-components'

import chevronTop from '../../../assets/icons/16/chevron-top.png'
import chevronBottom from '../../../assets/icons/16/chevron-bottom.png'

interface IPropsWrapper {
  IsOpen: boolean
}

interface IPropsValue {
  selectedCity: string
}

export const Wrapper = styled.div`
  margin: 32px 0 0 58px;
  position: relative;
  width: 252px;
  font-family: Ubuntu-Regular;
  z-index: 5;

  &::after {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    top: 16.5px;
    right: 20px;
    background-image: ${(props: IPropsWrapper) =>
      props.IsOpen ? `url(${chevronTop})` : `url(${chevronBottom})`};
    background-size: cover;
  }
`

export const SelectedCity = styled.div`
  width: 100%;
  height: 48px;
  background: rgba(128, 131, 164, 0.06);
  border: 2px solid rgba(128, 131, 164, 0.2);
  box-sizing: border-box;
  border-radius: 8px;
  font-size: 16px;
  padding: 0 16px 0 16px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;

  &:hover {
    border: 2px solid #373af5;
  }
  &:focus {
    border: 2px solid #373af5;
  }
`
export const Value = styled.p`
  color: ${(props: IPropsValue) =>
    props.selectedCity === 'Select city' ? '#8083A4' : '#2C2D76'};
`

export const Ul = styled.ul`
  list-style: none;
  width: 100%;
  height: 160px;
  padding: 6px;
  margin-top: 12px;
  background: #ffffff;
  border: 2px solid rgba(128, 131, 164, 0.06);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(4, 5, 73, 0.16),
    14px 14px 20px rgba(5, 6, 114, 0.08);
  border-radius: 8px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 4px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #8083a4;
    border-radius: 2px;
  }
`
export const Li = styled.li`
  height: 36px;
  line-height: 36px;
  padding-left: 16px;
  color: #2c2d76;
  cursor: pointer;

  &:hover {
    background: rgba(128, 131, 164, 0.06);
    border-radius: 8px;
  }
`
