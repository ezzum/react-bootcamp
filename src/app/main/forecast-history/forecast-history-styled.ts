import styled from 'styled-components'
import { DatePicker } from 'antd'

const backgroundColor: string = '#fff'
const titleFontColor: string = '#2c2d76'

export const Wrapper = styled.div`
  width: 660px;
  height: 524px;
  background: ${backgroundColor};
  box-shadow: 0px 4px 4px rgba(4, 5, 73, 0.25),
    14px 14px 20px rgba(5, 6, 114, 0.2);
  border-radius: 8px;
  position: relative;
`

export const Title = styled.h2`
  font-family: Ubuntu-Bold;
  font-size: 32px;
  color: ${titleFontColor};
  margin: 50px 0 0 58px;
`
export const CustomDatePicker = styled(DatePicker)`
  width: 252px;
  height: 48px;
  background: rgba(128, 131, 164, 0.06);
  border: 2px solid rgba(128, 131, 164, 0.2);
  box-sizing: border-box;
  border-radius: 8px;
  font-size: 16px;
  position: absolute;
  top: 132px;
  right: 57px;

  &:hover {
    border: 2px solid #373af5;
  }
`
