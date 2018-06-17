import React from 'react';
import PropTypes from 'prop-types';

// COMPONENTS
import { Alert } from '../../index';
import { Container } from './styles';

export default class AlertsContainer extends React.Component {
  render() {
    const { alerts, topOffset, clearAlert, setAlertClear } = this.props;
    if (alerts.length > 0) {
      return (
        <Container className='alerts__wrapper' topOffset={ topOffset }>
          { alerts.map((alert, i) =>
                (<Alert
                  key={ alert.id }
                  i={ i }
                  alert={ alert }
                  closeIcon={ this.props.closeIcon }
                  colours={ this.props.colours }
                  clearAlert={ (id) => clearAlert(id) }
                  setAlertClear={ (id, time) => setAlertClear(id, time) }
                />)) }
        </Container>
      );
    }
    return null;
  }
}

AlertsContainer.propTypes = {
  alerts: PropTypes.array,
  closeIcon: PropTypes.any,
  colours: PropTypes.object,
  topOffset: PropTypes.number,
  setAlertClear: PropTypes.func,
  clearAlert: PropTypes.func
};

AlertsContainer.defaultProps = {
  alerts: [],
  closeIcon: <span>X</span>,
  colours: {
    error: '#D0021B',
    warning: '#F6A623',
    info: '#8F8F8F',
    success: '#00A44C'
  },
  topOffset: 0,
  clearAlert: (id) => console.log(`Clear alert from container ${ id }`),
  setAlertClear: (id, time) => console.log(`Alert ${ id } will clear from container in ${ time } seconds`)
};