import React from 'react';
import { configure, addDecorator, setAddon } from '@storybook/react';
import infoAddon, { setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';
import { BrowserRouter } from 'react-router-dom';

setDefaults({
  inline: true,
  maxPropsIntoLine: 1,
  maxPropObjectKeys: 10,
  maxPropArrayLength: 10,
  maxPropStringLength: 100,
  styles: {
    infoBody: {
      border: 'none',
      borderRadius: 0,
      boxShadow: 'none',
      padding: '0 20px',
      margin: 0
    },
    infoStory: {
      padding: '40px 20px'
    }
  }
});


setOptions({
  name: 'Alerts',
  url: 'https://github.com/SaloCreative/alerts',
  addonPanelInRight: true
});

addDecorator(story => (
  <BrowserRouter>
    <div>
      { story() }
    </div>
  </BrowserRouter>
));


function loadStories() {
  require('../src/component/_story');
}

setAddon(infoAddon);

configure(loadStories, module);