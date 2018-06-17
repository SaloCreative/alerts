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

# AlertProvider

The alert provider uses the React context api to allow for state management of the alerts throughout your application. You can include the example provider at any level of your application and then the consumer can be placed anywhere in the tree below it. The consumer will have access to not only the alerts but also the methods for removing the alerts. 

---

## Usage

Install

```
yarn add @salocreative/alerts
```

```javascript
import { AlertProvider, AlertConsumer } from '@salocreative/alerts';
```

```javascript
<AlertProvider>
  // ...My tree of components
  <AlertConsumer />
</AlertProvider>
```

## Advanced usage

In order to provide backwards compatibility for use with other state management such as redux it is possible to merge external arrays of alerts into the provider. The provider accepts an optional `alerts` prop. If an array of alerts is provided then the Provider will merge them into its state and then provide a callback so that redux can be updated to remove the items from its state to maintain a single source of truth. The callback will return and array of alert ids as provided to it (*n.b.* when alerts are mapped to state in the Provider their id's are changed but a ref to the original is maintained to prevent duplications).

```javascript
<AlertProvider
  alerts={ alerts }
  alertsMerged={ (alerts) => this.removeOriginalAlerts() }
>
  // ...My tree of components
  <AlertConsumer />
</AlertProvider>
```

## Consumer

The `AlertConsumer` will pass down any props given to it to the `AlertContainer` component so you can pass in the following props for the `AlertContainer` at this level.

- `closeIcon`
- `colours`
- `topOffset`

e.g.

```javascript
<AlertProvider>
  <AlertConsumer
    colours={ { error: '#D0021B', warning: '#F6A623', info: '#8F8F8F', success: '#00A44C' } }
    topOffset={ 125 }
    closeIcon={ <span>X</span> }
  />
</AlertProvider>
```

## Standalone consumer

When using the `AlertProvider` there is no need to pass in the functions for removing the alerts or the `AlertsContainer` itself as these are already bundled into the Provider/Consumer. If you want to add alerts without adding an additional display then you can import the `Consumer` to your component directly and access the methods from there. e.g.

```javascript
import { Consumer as AlertsConsumer } from '@salocreative/alerts';

<AlertsConsumer>
        { ({ alerts, deleteAlert, insertAlert }) => {
          // ...your code here
        } }
```