import React from 'react';
import PropTypes from 'prop-types';
import { map, union, isEmpty } from 'lodash';

// COMPONENTS
import { Provider as AlertsProvider, addAlert, removeAlert } from '../../index';

export default class AlertProvider extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    // Merge in any alerts we are passing down
    let alertsToMerge = [];
    if (nextProps.alerts) {
      alertsToMerge = map(nextProps.alerts, alert => {
        if (!prevState.alertsToMerge.includes(alert.id)) {
          prevState.insertAlert(alert, prevState.alerts);
          return alert.id;
        }
        return null;
      }).filter(item => item);
      if (!isEmpty(alertsToMerge)) {
        // Dispatch prop function to identify any ids being merged
        if (nextProps.alertsMerged) {
          nextProps.alertsMerged(alertsToMerge);
        }
      }
    }
    return { alertsToMerge: union(prevState.alertsToMerge, alertsToMerge) };
  }

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
      alertsToMerge: [],
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

AlertProvider.defaultProps = { alertsMerged: (alerts) => console.log(alerts) };

AlertProvider.propTypes = {
  alertsMerged: PropTypes.func,
  children: PropTypes.any.isRequired
};