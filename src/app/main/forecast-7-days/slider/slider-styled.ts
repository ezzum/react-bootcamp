import styled from 'styled-components'

import {
  IWeatherIconProps,
  IArrowLeftProps,
  IArrowRightProps
} from './intefaces'
import arrowLeft from '../../../../assets/icons/24/chevron-left@2x.png'
import arrowRight from '../../../../assets/icons/24/chevron-left@2x-1.png'

export const Wrapper = styled.div`
  width: 100%;
  height: 270px;
  display: flex;
  justify-content: center;
  position: absolute;
  left: 50%;
  bottom: 40px;
  transform: translate(-50%, 0);
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
  background-image: ${(props: IWeatherIconProps) =>
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
export const ArrowLeft = styled.div`
  width: 24px;
  height: 50px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${arrowLeft});
  position: relative;
  left: -6px;
  top: 95px;
  cursor: pointer;
  transition: 0.2s;

  pointer-events: ${(props: IArrowLeftProps) => (props.left ? 'auto' : 'none')};
  opacity: ${(props: IArrowLeftProps) => (props.left ? 1 : 0.3)};

  &:hover {
    transform: scale(1.2);
  }
`
export const ArrowRight = styled.div`
  width: 24px;
  height: 50px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${arrowRight});
  position: relative;
  left: 6px;
  top: 95px;
  cursor: pointer;
  transition: 0.2s;

  pointer-events: ${(props: IArrowRightProps) =>
    props.right ? 'auto' : 'none'};
  opacity: ${(props: IArrowRightProps) => (props.right ? 1 : 0.3)};

  &:hover {
    transform: scale(1.2);
  }
`
