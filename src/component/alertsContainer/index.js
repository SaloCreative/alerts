import React from 'react';
import PropTypes from 'prop-types';

// COMPONENTS
import { Alert } from '../../index';
import { Container } from './styles';

export default class AlertsContainer extends React.Component {
  render() {
    const {
      alerts,
      topOffset,
      clearAlert,
      setAlertClear,
      closeIcon,
      colours,
      alertStyleString,
      alertStyle,
      containerStyleString,
      containerStyle
    } = this.props;

    if (alerts.length > 0) {
      return (
        <Container
          styleString={ containerStyleString }
          style={ containerStyle }
          topOffset={ topOffset }
        >
          { alerts.map((alert, i) => (
            <Alert
              key={ alert.id }
              i={ i }
              alertStyleString={ alertStyleString }
              alertStyle={ alertStyle }
              alert={ alert }
              closeIcon={ closeIcon }
              colours={ colours }
              clearAlert={ (id) => clearAlert(id) }
              setAlertClear={ (id, time) => setAlertClear(id, time) }
            />
          )) }
        </Container>
      );
    }
    return null;
  }
}

AlertsContainer.propTypes = {
  /**
   * Array of alarts to render
   */
  alerts: PropTypes.array,
  /**
   * Styles which will be added to the alerts as a object `style={alertStyle}`
   */
  alertStyle: PropTypes.object,
  /**
   * Styles which will be passed and executed directly in th alert container styled component
   */
  alertStyleString: PropTypes.string,
  /**
   * Styles which will be added to the container as a object `style={containerStyle}`
   */
  containerStyle: PropTypes.object,
  /**
   * Styles which will be passed and executed directly in th container styled component
   */
  containerStyleString: PropTypes.string,
  closeIcon: PropTypes.any,
  colours: PropTypes.object,
  topOffset: PropTypes.number,
  setAlertClear: PropTypes.func,
  clearAlert: PropTypes.func
};

AlertsContainer.defaultProps = {
  containerStyleString: '',
  containerStyle: {},
  alertStyleString: '',
  alertStyle: {},
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