import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 82%;
  height: 270px;
  display: flex;
  margin: 50px auto 0;
`

export const Card = styled.div`
  width: 174px;
  height: 238px;
  background-color: #373af5;
  border: 2px solid #373af5;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(4, 5, 73, 0.25),
    14px 14px 20px rgba(5, 6, 114, 0.2);
  border-radius: 8px;
  margin-right: 10px;
  flex-shrink: 0;
  position: relative;
`
export const Temp = styled.div`
  color: #fff;
  font-size: 32px;
  font-family: Ubuntu-Bold;
  position: absolute;
  right: 20px;
  bottom: 20px;
`

export const WeatherIcon = styled.div`
  width: 120px;
  height: 120px;
  background-image: ${(props: IProps) =>
    `url(http://openweathermap.org/img/wn/${props.icon}@2x.png)`};
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`
export const Date = styled.div`
  color: #fff;
  font-size: 16px;
  font-family: Ubuntu-Bold;
  position: absolute;
  left: 20px;
  top: 20px;
`

interface IProps {
  icon: string
}
