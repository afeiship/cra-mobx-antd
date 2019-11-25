import { inject, observer } from 'mobx-react';
import { action } from 'mobx';
import React from 'react';
import './style.scss';

@inject('dashboard')
@observer
export default class extends React.Component {

  onBtnClick = (inEvent) => {
    const { dashboard } = this.props;
    dashboard.changeId('str' + Math.random() * 100);
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
        <p>{this.props.dashboard.id}</p>
        <button onClick={this.onBtnClick}>ClickToChange</button>
      </div>
    );
  }
}
