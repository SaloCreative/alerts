import { createContext } from 'react';

const { Provider, Consumer } = createContext({
  alerts: [],
  deleteAlert: () => {},
  insertAlert: () => {},
  timoutAlert: () => {}
});

export { Provider, Consumer };