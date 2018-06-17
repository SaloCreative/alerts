import { filter, clone } from 'lodash';

export function guidGenerator() {
  const S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (`${ S4() + S4() }-${ S4() }-${ S4() }-${ S4() }-${ S4() }${ S4() }${ S4() }`);
}

export const removeAlert = (alertID, alerts) => {
  return filter(alerts, item => item.id !== alertID);
};

export const addAlert = (alert, alerts) => {
  const newAlerts = clone(alerts);
  newAlerts.push({ ...alert, id: guidGenerator() });
  return newAlerts;
};