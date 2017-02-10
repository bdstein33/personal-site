import React from 'react';
import classNames from 'classnames';
import {autobind} from 'core-decorators';
import Text from './Text';

class DrawingCanvas extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    style: React.PropTypes.object,
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    onMouseUp: React.PropTypes.func,
    label: React.PropTypes.string
  };

  static defaultProps = {
    width: 100,
    height: 100
  }

  constructor(props) {
    super(props);
    this.state = {
      mouseDown: false,
      prevX: 0,
      curX: 0,
      prevY: 0,
      curY: 0
    };
  }

  @autobind
  mouseUp(e) {
    this.setState({mouseDown: false});

    const canvas = e.target;

    const ctx = canvas.getContext('2d');
    const data = ctx.getImageData(0, 0, this.props.width, this.props.height).data;

    this.props.onMouseUp(data);
  }

  @autobind
  mouseDown(e) {
    const {top, left} = e.target.getBoundingClientRect();
    this.setState({
      mouseDown: true,
      prevX: e.pageX - left,
      prevY: e.pageY - top,
      curX: e.pageX - left,
      curY: e.pageY - top
    });
  }

  @autobind
  draw(e) {
    if (this.state.mouseDown) {
      const {top, left} = e.target.getBoundingClientRect();
      this.setState({
        prevX: this.state.curX,
        prevY: this.state.curY,
        curX: e.pageX - left,
        curY: e.pageY - top
      });

      const canvas = e.target.getContext('2d');
      canvas.imageSmoothingEnabled = false;
      canvas.moveTo(this.state.prevX, this.state.prevY);
      canvas.lineTo(this.state.curX, this.state.curY);
      canvas.strokeStyle = 'black';
      canvas.lineWidth = 3;
      canvas.stroke();
      canvas.closePath();
    }
  }

  @autobind

  render() {
    const {
      className,
      width,
      height,
      label,
      ...otherProps
    } = this.props;

    return (
        <div>
          <div>
          {label && <Text className='canvas-input-label'>{label}</Text>}
          </div>
          <div>
            <canvas
              className={classNames('drawing-canvas', className)}
              width={width}
              height={height}
              style={{width, height}}
              onMouseDown={this.mouseDown}
              onMouseMove={this.draw}
              onMouseUp={this.mouseUp}
            >
          </canvas>
          </div>
        </div>
    );
  }
}

export default DrawingCanvas;
