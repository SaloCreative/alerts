import { createContext } from 'react';

const { Provider, Consumer } = createContext({
  alerts: [],
  removeAlert: () => {},
  addAlert: () => {}
});

export { Provider, Consumer };