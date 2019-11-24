import { inject, observer } from 'mobx-react';
import { action } from 'mobx';
import React from 'react';
import './style.scss';


// @inject('dashboard')
// @observer
export default class extends React.Component {
  onBtnClick = (inEvent) => {
    const { dashboard } = this.props;
    dashboard.changeId('str' + Math.random() * 100);
    console.log('btn click!');
  };

  render() {
    return (
      <div className="view__charteditor">
        <p>ChartEditor! </p>
        <p>Based on Mobx!</p>
      </div>
    );
  }
}
