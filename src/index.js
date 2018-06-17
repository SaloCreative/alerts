import { removeAlert, addAlert, guidGenerator } from './helpers';
import { Provider, Consumer } from './context';

export { default as Alert } from './component/alert';
export { default as AlertsContainer } from './component/alertsContainer';
export { default as AlertProvider } from './component/alertProvider';
export { default as AlertConsumer } from './component/alertConsumer';

export {
  removeAlert,
  addAlert,
  guidGenerator,
  Provider,
  Consumer
};