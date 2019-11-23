import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './style.scss';

// constants:
const CLASS_NAME = 'file-upload';

export default class extends React.Component {
  static displayName = CLASS_NAME;
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {};
  /*===properties end===*/

  render() {
    const { className, children, ...props } = this.props;
    return (
      <div data-component={CLASS_NAME} className={cx('f12', CLASS_NAME, className)} {...props}>
        <nav className={`${CLASS_NAME}__nav`}>NAV</nav>
        {children}
      </div>
    );
  }
}
