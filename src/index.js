import { removeAlert, addAlert, guidGenerator } from './helpers';
import { Provider, Consumer } from './context';

export { default as Alert } from './component/alert';
export { default as AlertContainer } from './component/alertsContainer';

export {
  removeAlert,
  addAlert,
  guidGenerator,
  Provider,
  Consumer
};