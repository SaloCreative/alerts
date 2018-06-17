import { createContext } from 'react';

const { Provider, Consumer } = createContext({
  alerts: [],
  deleteAlert: () => {},
  insertAlert: () => {}
});

export { Provider, Consumer };