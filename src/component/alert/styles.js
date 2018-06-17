import styled, { keyframes } from 'styled-components';

export const loadSwipe = keyframes`
  from {
    width: 0
  },
  to {
    width: 100%
  }
`;

export const AlertWrapper = styled.div`
  width: 100%;
  background: ${ props => props.colours.success };
  color: #fff;
  padding: 5px 10px;
  font-size: 12px;
  text-align: left;
  height: 40px;
  display: flex;
  align-items: center;
  position: relative;
  &.error {
    background: ${ props => props.colours.error };
  }
  &.warning {
    background: ${ props => props.colours.warning };
  }
  &.info {
    background: ${ props => props.colours.info };
  }
  &:after {
    display: block;
    content: "";
    width: 100%;
    left: 0;
    top: 0;
    position: absolute;
    height: ${ props => (props.dismissible ? '2px' : '0px') };
    background: rgba(255,255,255,0.3);
    webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    webkit-animation: ${ loadSwipe } ${ props => (props.time ? props.time : 5) }s linear;
    animation: ${ loadSwipe } ${ props => (props.time ? props.time : 5) }s linear infinite;      
  }
`;

export const Close = styled.a`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  width: 30px;
  height: 100%;
  opacity: 0.6;
  cursor: pointer;
  transition: opacity 0.3s linear;
  &:hover {
    opacity: 1;
  }
`;