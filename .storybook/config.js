import { configure } from '@storybook/react';

const loadStories = () => {
  require('../src/index.story.js');
}

configure(loadStories, module);
