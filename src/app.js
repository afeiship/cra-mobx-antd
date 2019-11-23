import React from 'react';
import nx from '@feizheng/next-js-core2';
import { Provider, inject } from 'mobx-react';
import stores from '@/components/stores';

import HelloWorld from '@/components/views/hello-world';

export default class extends React.Component {

  componentDidMount() {
    console.log('hello!', nx);
    console.log(stores);
  }

  render() {
    return (
      <Provider {...stores}>
        <div className="hello">
          <h1>Hello world!</h1>
          <p>It works!!!</p>
          <HelloWorld />
        </div>
      </Provider>
    );
  }
}
