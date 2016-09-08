import React from 'react';
import classNames from 'classnames';

import Link from '../Link';
import Text from '../Text';

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
        <Text className={classNames('topnav-link', float, className)}>{label}</Text>
      </Link>
    );
  }
}

export default TopNavLink;
