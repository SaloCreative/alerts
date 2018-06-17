import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import withReadme from 'storybook-readme/with-readme';
import { withKnobs, select, boolean, number } from '@storybook/addon-knobs';

// FEATURED COMPONENT //
import { AlertContainer } from '../../index';
import README from './README.md';

// START OF CONTAINER
export const stories = storiesOf('Alert Container', module);
stories.addDecorator(withReadme(README));
stories.addDecorator(withKnobs);
const id = Math.floor((Math.random() * 9999) + 1000);

// Dummy data
const alerts = [{
  message: 'My alert message text',
  type: 'success',
  dismissible: true,
  time: 10,
  id
}];

stories.add(
  'Implementation',
  withInfo({ text: 'Dropdown with knobs for testing various permutations and combinations' })(() => {
    const topOffset = number('Top offset', 125);

    return (
      <AlertContainer
        topOffset={ topOffset }
        alerts={ alerts }
      />
    );
  })
);