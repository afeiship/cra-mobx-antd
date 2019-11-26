import React from 'react';
import { storiesOf } from '@storybook/react';
import AbcBiTestComponent from '..';

storiesOf('Demo|CardComponent').add('CardWithText', () => {
  return <AbcBiTestComponent>Text</AbcBiTestComponent>;
});
