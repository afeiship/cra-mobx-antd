import { inject, observer } from 'mobx-react';
import { action } from 'mobx';

@inject('dashboard')
@observer
export default class extends React.Component {
  onBtnClick = (inEvent) => {
    const { dashboard } = this.props;
    dashboard.changeId('str' + Math.random() * 100);
    console.log('btn click!');
  };

  render() {
    return (
      <div className="hello">
        <button onClick={this.onBtnClick}>RandomId</button>
        Hello Mobx! {this.props.dashboard.id}
      </div>
    );
  }
}
