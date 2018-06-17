# AlertsContainer

The alerts container can be used to easily encapsulate multiple alert messages in you your app where you wish to manage your own context or integrate with another system such as react.

---

## Usage

Install

```
yarn add @salocreative/alerts
```

```javascript
import { AlertsContainer } from '@salocreative/alerts';
```

```javascript
<AlertsContainer
  topOffset={ 140 }
  closeIcon={ <span>X</span> }
  colours={ {
    error: '#D0021B',
    warning: '#F6A623',
    info: '#8F8F8F',
    success: '#00A44C'
  } }
  alerts={ [...{}] }
  clearAlert={ (id) => this.clearAlert(id) }
  setAlertClear={ (id, time) => this.timeOutAlert(id, time) }
/>
```
