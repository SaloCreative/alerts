import React from 'react';
import styled from 'styled-components';

// components
import { withAlerts, AlertConsumer } from '../../index';

// styled
const Alert = styled.div`
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  background: #00A44C;
  color: #fff;
  width: 100%;
  padding: 25px 30px;
  font-size: 11px;
  line-height: 1.125;
  min-height: 70px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 1.8em;
    padding-right: 0.5em;
  }

  button {
    box-sizing: border-box;
    -webkit-appearance: none;
    cursor: pointer;
    backface-visibility: hidden;
    border: none;
    background: transparent;
    border-radius: 0;
    font-size: 1.8em;
    margin-left: 0.5em;
    transition: all 0.3s;
    border: 1px solid rgba(0, 0, 0, 0.2);

    &:hover {
      transition: all 0.3s;
      transform: scale(1.1);
      opacity: 0.8;
    }
  }

  @media(min-width: 620px) {
    font-size: 17px;
    min-height: 80px;
  }
`;

// back component
const Fish = (props) => {
  const { alert, clearAlert } = props;

  return (
    <Alert>
      <div><span role='img' aria-label='thumbs up'>👍</span> { alert.message }</div>
      <button onClick={ () => clearAlert(alert.id) } aria-label='thumbs up'>🙈</button>
    </Alert>
  );
};

// component
class CustomAlert extends React.Component {
  componentDidMount() {
    const { insertAlert } = this.props;

    insertAlert({
      type: 'success',
      message: 'Well done for finding me!',
      time: 5000,
      render: (props) => (
        <Fish key={ props.i } { ...props } />
      )
    });
  }

  render() {
    return (
      <React.Fragment>
        <AlertConsumer />
        { '☝️Auto on mount generating a alert using insertAlert' }
      </React.Fragment>
    );
  }
}

export default withAlerts(CustomAlert);