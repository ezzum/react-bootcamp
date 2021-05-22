import styled from 'styled-components'

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
