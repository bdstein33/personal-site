import React from 'react';
import classNames from 'classnames';
import {autobind} from 'core-decorators';

// class CanvasComponent extends React.Component {
//   static propTypes = {
//     imgData: React.PropTypes.object,
//     id: React.PropTypes.number
//   };

//   componentDidMount() {
//     this.updateCanvas();
//   }

//   updateCanvas() {
//     const canvas = this.refs[`canvas${this.props.id}`];
//     const preferredDimension = 20;
//     canvas.width = canvas.height = preferredDimension;
//     const ctx = canvas.getContext('2d');
//     console.log(this.props.imgData);
//     ctx.putImageData(this.props.imgData, 0, 0);
//     console.log(canvas);
//   }

//   render() {
//     return (
//         <canvas ref={`canvas${this.props.id}`} />
//     );
//   }
// }
function dataURItoBlob(dataURI) {
    var binary = atob(dataURI.split(',')[1]);
    var array = [];
    for(var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {type: 'image/png'});
}

class DrawingCanvas extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    style: React.PropTypes.object,
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    onMouseUp: React.PropTypes.func
  };

  static defaultProps = {
    width: 200,
    height: 200
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
    const image = canvas.toDataURL('image/png');

    this.props.onMouseUp(JSON.stringify(image));
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
      canvas.lineWidth = 5;
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
      ...otherProps
    } = this.props;

    return (
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
    );
  }
}

export default DrawingCanvas;
