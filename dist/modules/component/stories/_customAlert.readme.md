## Overriding alert component
```javascript
insertAlert({
  type: 'success',
  message: 'message',
  time: 5000,
  render: (props) => (
    <Fish key={ props.i } { ...props } />
  )
});
```

## Example component render
```javascript
const Fish = (props) => {
  const { alert } = props;

  return (
    <h1>
      { alert.message }
    </h1>
  );
};
```

## Exposed props
```javascript
alert: PropTypes.any.isRequired,
setAlertClear: PropTypes.func,
clearAlert: PropTypes.func,
colours: PropTypes.object,
closeIcon: PropTypes.any
```