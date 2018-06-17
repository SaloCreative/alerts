import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: fixed;
  top: ${ props => props.topOffset }px;
  left: 0;
  z-index: 9999;
`;