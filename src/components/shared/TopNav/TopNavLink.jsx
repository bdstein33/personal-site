import React from 'react';
import classNames from 'classnames';

import Link from '../Link';

class TopNavLink extends React.Component {
  static propTypes = {
    label: React.PropTypes.string.isRequired,
    href: React.PropTypes.string,
    float: React.PropTypes.string,
    className: React.PropTypes.string
  }

  static defaultProps = {
    float: 'left'
  }

  render() {
    const {
      label,
      href,
      float,
      className,
      ...otherProps
    } = this.props;

    return (
      <Link href={href} {...otherProps}>
        <div className={classNames('topnav-link', float, className)}>
          {label}
        </div>
      </Link>
    );
  }
}

export default TopNavLink;
