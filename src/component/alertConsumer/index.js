import React from 'react';

// COMPONENTS
import { Consumer as AlertsConsumer, AlertsContainer } from '../../index';

export default class Alerts extends React.Component {
  render() {
    return (
      <AlertsConsumer>
        { ({ alerts, deleteAlert }) => {
          // If no alerts return null
          return (
            <AlertsContainer
              alerts={ alerts }
              { ...this.props }
              clearAlert={ (id) => deleteAlert(id) }
            />
          );
        } }
      </AlertsConsumer>
    );
  }
}