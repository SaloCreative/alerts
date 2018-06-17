# react-redux-alerts

Description of component and any special notes

## Usage

Install

```
yarn add @salocreative/react-redux-alerts
```

Include the Alerts component at the top of the component it's required in.

```
import { Alerts } from '@salocreative/react-redux-alerts';
```

Implement as follows

```
<Alerts alerts={ this.props.systemAlerts } />
```

In order to make sure the alerts are in your state you need to include the system alerts reducer into your combine reducer function.

in your reducer index include:

```
import { systemAlerts } from '@salocreative/react-redux-alerts';
```
and add to your combine reducer function. Next make sure that `systemAlerts` is mapped to props and connected to your component

## ADD ALERTS
You can add alerts either via the `API_FAILURE` or `ADD_ALERT` action types. Both of these should be imported from this package. Although functionality is currently the same they are deliberately seperated for future development.

Both actions need to be dispatched with a payload as below:

```
return {
    type: API_FAILURE,
    payload: {
      errorMessage: {
       type: 'error',
       message: 'My failure message goes here'
     }
    }
};

```

or ADD_ALERT as per:

```
return {
   type: ADD_ALERT,
   payload: {
     message: {
       type: 'success',
       message: 'My alert message goes here'
     }
   }
 };
```

## Setting alert timeout

The alerts will automatically remove themselves after 5 seconds. You can customise this in the payload by setting an additional key in the message of time (this is in seconds). eg.

```
return {
   type: ADD_ALERT,
   payload: {
     message: {
       type: 'success',
       message: 'My alert message goes here',
       time: 20
     }
   }
 };
```

## Remove Alerts
Currently alerts timeout after 5s and are removed from state. It is possible to manually remove all alerts from state via the following action types

```
return {
   type: CLEAR_ALL_SYSTEM_ALERTS

};
```

### Further Development
- [ ] Add ability to set dismissable true/false
- [x] Ability to set timeouts per alert
- [x] Improve documentation

## LICENSE

MIT
