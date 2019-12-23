import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import AbcBiTestComponent from '..';
import { Provider } from 'mobx-react';
import stores from '#/stores';

addDecorator((story) => {
  return <Provider store={stores}>{story()}</Provider>;
});

storiesOf('Demo|CardComponent').add('CardWithText', () => {
  return <AbcBiTestComponent>Text</AbcBiTestComponent>;
});
