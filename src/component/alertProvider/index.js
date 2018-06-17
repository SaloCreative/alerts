import React from 'react';
import PropTypes from 'prop-types';

// COMPONENTS
import { Provider as AlertsProvider, addAlert, removeAlert } from '../../index';

const id = Math.floor((Math.random() * 9999) + 1000);

export default class AlertProvider extends React.Component {
  constructor() {
    super();
    this.deleteAlert = (alertID) => {
      this.setState({ alerts: removeAlert(alertID, this.state.alerts) });
    };
    this.insertAlert = (alert) => {
      this.setState({ alerts: addAlert(alert, this.state.alerts) });
    };
    this.timoutAlert = (alertID, time) => {
      setTimeout(() => {
        this.setState({ alerts: removeAlert(alertID, this.state.alerts) });
      }, time * 1000);
    };
    this.state = {
      alerts: [],
      deleteAlert: this.deleteAlert,
      insertAlert: this.insertAlert,
      timoutAlert: this.timoutAlert
    };
  }
  render() {
    const { children } = this.props;
    const { alerts, deleteAlert, insertAlert, timoutAlert } = this.state;
    return (
      <AlertsProvider value={ { alerts, deleteAlert, insertAlert, timoutAlert } }>
        { children }
      </AlertsProvider>
    );
  }
}

AlertProvider.propTypes = { children: PropTypes.any.isRequired };