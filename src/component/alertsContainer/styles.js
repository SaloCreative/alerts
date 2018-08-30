import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: ${ ({ topOffset }) => topOffset }px;
  left: 0;
  width: 100%;
  z-index: 9999;

  ${ ({ styleString }) => styleString }
`;