import React from 'react';
import hoistStatics from 'hoist-non-react-statics';

// context
import { Consumer as AlertsConsumer } from './index';

// display name
function getDisplayName(Component) {
  return Component.displayName || Component.name || 'Component';
}

// hoc
export default function withAlerts(WrappedComponent) {
  class AlertContext extends React.Component {
    render() {
      return <WrappedComponent { ...this.props } />;
    }
  }

  const displayName = getDisplayName(WrappedComponent);

  AlertContext.displayName = `withAlerts(${ displayName })`;

  const ForwardRef = React.forwardRef((props, ref) => {
    return (
      <AlertsConsumer>
        { ({ alerts, deleteAlert, insertAlert }) => {
          return (
            <AlertContext
              { ...props }
              alerts={ alerts }
              deleteAlert={ deleteAlert }
              insertAlert={ insertAlert }
              ref={ ref }
            />
          );
        } }
      </AlertsConsumer>
    );
  });

  hoistStatics(ForwardRef, WrappedComponent);
  return ForwardRef;
}