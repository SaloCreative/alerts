import React from 'react';

// COMPONENTS
import { Consumer as AlertsConsumer, AlertsContainer } from '../../index';

export default class Alerts extends React.Component {
  render() {
    return (
      <AlertsConsumer>
        { ({ alerts, deleteAlert, timoutAlert }) => {
          // If no alerts return null
          return (
            <AlertsContainer
              alerts={ alerts }
              clearAlert={ (id) => deleteAlert(id) }
              setAlertClear={ (id, time) => timoutAlert(id, time) }
              { ...this.props }
            />
          );
        } }
      </AlertsConsumer>
    );
  }
}