import React from 'react';
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
      <Container isFullWidth={true} centerContent={true} className='hero'>
        <Text className='title' fontSize={4}>{title}</Text>
        {children}
      </Container>

    );
  }
}

export default Link;
