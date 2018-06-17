import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import withReadme from 'storybook-readme/with-readme';
import { withKnobs, select, boolean, number } from '@storybook/addon-knobs';

// FEATURED COMPONENT //
import { Alert } from '../../index';
import README from './README.md';

// START OF CONTAINER
export const stories = storiesOf('alert', module);
stories.addDecorator(withReadme(README));
stories.addDecorator(withKnobs);
let id = Math.floor((Math.random() * 9999) + 1000);

// Dummy data
const alert = {
  message: 'My alert message text',
  type: 'success',
  dismissible: false,
  time: 10,
  id
}

stories.add(
  'Implementation',
  withInfo({ text: 'Dropdown with knobs for testing various permutations and combinations' })(() => {

    const type = select('Type', {
      'success': 'success',
      'error': 'error',
      'info': 'info',
      'warning': 'warning'
    }, 'success');

    const dismissible = boolean('Dismissible', false);

    const time = number('Time', 10)

    const newAlert = {
      ...alert,
      type,
      dismissible,
      time
    }
    return (
       <Alert
        alert={ newAlert }
      />
    );
  })
);
