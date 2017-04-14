import React from 'react';
import classNames from 'classnames';

import {Link as RouterLink} from 'react-router';

class Link extends React.Component {
  static propTypes = {
    href: React.PropTypes.string,
    fontSize: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7]),
    className: React.PropTypes.string,
    children: React.PropTypes.node
  };

  static defaultProps = {
    href: null,
    fontSize: 4
  }

  render() {
    const {
      href,
      fontSize,
      className,
      children,
      ...otherProps
    } = this.props;

    const compiledClassName = classNames(
      `font-size-${fontSize}`,
      className
    );

  if (/^https?/.test(href)) {
      return <a
               href={href}
               className={compiledClassName}
               {...otherProps}
             >
              {children}
            </a>;
    } else if (href) {
      return <RouterLink
               to={href}
               className={compiledClassName}
               {...otherProps}
             >
              {children}
            </RouterLink>;
    }

    return <div {...otherProps}>{children}</div>;
  }
}

export default Link;
