import React from 'react';
import PropTypes from 'prop-types';

// STYLES
import { AlertWrapper, Close } from './styles';

class Alert extends React.Component {
  componentDidMount() {
    const { alert, setAlertClear } = this.props;
    if (this.isDismissible() && this.hasAutoTimeout()) {
      setAlertClear(alert.id, alert.time);
    }
  }

  isDismissible() {
    const { alert } = this.props;
    return typeof alert.dismissible === 'undefined' || alert.dismissible;
  }

  hasAutoTimeout() {
    const { alert } = this.props;
    return typeof alert.time === 'undefined' || alert.time;
  }

  renderClose() {
    const { alert, closeIcon, clearAlert } = this.props;
    if (this.isDismissible()) {
      return (
        <Close className='alert__close' onClick={ () => clearAlert(alert.id) } role='button' tabIndex='-1'>
          { closeIcon }
        </Close>
      );
    }
    return null;
  }

  render() {
    const { alert, colours, alertStyle, alertStyleString } = this.props;

    if (alert) {
      return (
        <AlertWrapper
          className={ `alert ${ alert.type }` }
          colours={ colours }
          time={ alert.time }
          style={ alertStyle }
          styleString={ alertStyleString }
          dismissible={ this.isDismissible() && this.hasAutoTimeout() }
        >
          { alert.message }
          { this.renderClose() }
        </AlertWrapper>
      );
    }
    return null;
  }
}

Alert.defaultProps = {
  colours: {
    error: '#D0021B',
    warning: '#F6A623',
    info: '#8F8F8F',
    success: '#00A44C'
  },
  alertStyleString: '',
  alertStyle: {},
  closeIcon: <span>X</span>,
  clearAlert: (id) => console.log(`Clear alert ${ id }`),
  setAlertClear: (id, time) => console.log(`Alert ${ id } will clear in ${ time } seconds`)
};

Alert.propTypes = {
  alert: PropTypes.any.isRequired,
  setAlertClear: PropTypes.func,
  clearAlert: PropTypes.func,
  colours: PropTypes.object,
  closeIcon: PropTypes.any,
  /**
   * Styles which will be added to the alerts as a object `style={alertStyle}`
   */
  alertStyle: PropTypes.object,
  /**
   * Styles which will be passed and executed directly in th alert container styled component
   */
  alertStyleString: PropTypes.string
};

export default Alert;