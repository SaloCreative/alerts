import { createContext } from 'react';

const { Provider, Consumer } = createContext({
  alerts: [],
  deleteAlert: () => {},
  insertAlert: () => {},
  timoutAlert: () => {},
  clearAll: () => {}
});

export { Provider, Consumer };