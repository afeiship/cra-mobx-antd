import { configure, addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import { Provider } from 'mobx-react';
import stores from '#/stores';

// mobx store/inject support(?)
addDecorator((story) => <Provider store={stores}>{story()}</Provider>);
addDecorator(StoryRouter());

configure(require.context('../src', true, /\.story\.js$/), module);
