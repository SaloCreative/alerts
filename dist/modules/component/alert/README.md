# Alert

Alerts can be used in complete isolation but are designed to be used inside an alerts wrapper/provider to allow simplified state management.

---

## Usage

Install

```
yarn add @salocreative/alerts
```

```javascript
import { Alert } from '@salocreative/alerts';
```

```javascript
<Alert
  // Prop containing an alert object
  alert={ {
    message: 'My alert message goes here',
    dismissible={ true },
    time={ 10 },
    type='success',
    id={ 213 }
  } }

  // Pass in function to clear the alert
  clearAlert={ (id) => this.clearAlert(id) }

  // Pass in function to clear alert after set time
  setAlertClear={ (id, time) => this.timeOutAlert(id, time) }
/>
```
