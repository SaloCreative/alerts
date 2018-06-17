import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import withReadme from 'storybook-readme/with-readme';
import { withKnobs, number } from '@storybook/addon-knobs';

// FEATURED COMPONENT //
import { AlertProvider, AlertConsumer } from '../../index';
import README from './README.md';

// START OF CONTAINER
export const stories = storiesOf('Alert Provider', module);
stories.addDecorator(withReadme(README));
stories.addDecorator(withKnobs);
const id = Math.floor((Math.random() * 9999) + 1000);

stories.add(
  'Implementation',
  withInfo({ text: 'Dropdown with knobs for testing various permutations and combinations' })(() => {
    const topOffset = number('Top offset', 125);

    return (
      <AlertProvider>
        <AlertConsumer topOffset={ topOffset } />
      </AlertProvider>
    );
  })
);