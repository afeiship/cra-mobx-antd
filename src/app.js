import React from 'react';
import nx from '@feizheng/next-js-core2';

export default class extends React.Component {
  componentDidMount() {
    console.log('hello!', nx);
  }

  render() {
    return (
      <div className="hello">
        <h1>Hello world!</h1>
        <p>It works!</p>
      </div>
    );
  }
}
