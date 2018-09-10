import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import withReadme from 'storybook-readme/with-readme';

// FEATURED COMPONENT //
import { AlertProvider } from '../../index';
import README from './_customAlert.readme.md';

// other components
import CustomAlert from './_customAlert.component';

// START OF CONTAINER
export const stories = storiesOf('Alert Custom', module);
stories.addDecorator(withReadme(README));

stories.add(
  'example',
  withInfo({ text: '' })(() => {
    return (
      <AlertProvider>
        <CustomAlert />
      </AlertProvider>
    );
  })
);