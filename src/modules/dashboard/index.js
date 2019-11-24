import { inject, observer } from 'mobx-react';
import { action } from 'mobx';
import React from 'react';
import './style.scss';

// @inject('dashboard')
// @observer
export default class extends React.Component {
  onBtnClick = (inEvent) => {
    // const { dashboard } = this.props;
    // dashboard.changeId('str' + Math.random() * 100);
    // console.log('btn click!');
  };

  componentDidMount() {
    console.log('dashboard!');
    // console.log('styles::', styles);
  }


  render() {
    return (
      <div className="view__dashboard">
        <p>DashBoard! </p>
        <p>Based on Mobx!</p>
      </div>
    );
  }
}
