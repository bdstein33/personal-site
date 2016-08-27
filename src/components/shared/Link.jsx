import React from 'react';
import {Link as RouterLink} from 'react-router';

class Link extends React.Component {
  static propTypes = {
    href: React.PropTypes.string,
    children: React.PropTypes.node
  };

  static defaultProps = {
    href: null
  }

  render() {
    const {
      href,
      children,
      ...otherProps
    } = this.props;

    if (/^https?/.test(href)) {
      return <a href={href} {...otherProps}></a>;
    } else if (href) {
      return <RouterLink to={href} {...otherProps}>{children}</RouterLink>;
    }

    return <div {...otherProps}>{children}</div>;
  }
}

export default Link;
