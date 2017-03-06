import React from 'react';
import classNames from 'classnames';

import Text from './Text';
import Container from './layout/Container';

class Link extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    className: React.PropTypes.string,
    children: React.PropTypes.node
  };

  render() {
    const {
      title,
      children,
      className,
      ...otherProps
    } = this.props;

    return (
      <Container
        isFullWidth={true}
        centerContent={true}
        className={classNames('hero', className)}
        {...otherProps}
      >
        <Text className='title' fontSize={5}>{title}</Text>
        {children}
      </Container>

    );
  }
}

export default Link;
