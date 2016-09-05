import React from 'react';
import classNames from 'classnames';

class FlexBox extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    flexDirection: React.PropTypes.oneOf(['row', 'column']),
    flexWrap: React.PropTypes.bool,
    alignItems: React.PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around']), // veritcal alignment
    justifyContent: React.PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around']), // horizontal alignment
    style: React.PropTypes.object
  };

  static defaultProps = {
    flexDirection: 'row',
    flexWrap: false
  }

  render() {
    const {
      children,
      className,
      flexDirection,
      flexWrap,
      alignItems,
      justifyContent,
      style,
      ...otherProps
    } = this.props;

    return (
      <div
        {...otherProps}
        className={classNames('flex', className)}
        style={{
          display: 'flex',
          flexDirection,
          flexWrap: flexWrap ? 'wrap' : 'no-wrap',
          alignItems: alignItems || null,
          justifyContent: justifyContent || null,
          ...style
        }}
      >
        {children}
      </div>
    );
  }
}

export default FlexBox;
