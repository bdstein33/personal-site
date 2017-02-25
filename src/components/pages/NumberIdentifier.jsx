import React from 'react';
import {autobind} from 'core-decorators';

import storeConnect from '../addons/storeConnect';
import {numberIdentifierActions} from '../../actions';

import * as C from '../shared';
import PredictionRow from './NumberIdentifier/PredictionRow';

const formatBitmapData = data => data
                                  .filter((n, i) => (i + 1) % 4 === 0)
                                  .map(n => (n === 0 ? 0 : 1));

const bitmapToPNG = data => {
  return data.reduce((storage, n) => {
      return [...storage, 0, 0, 0, n > 0 ? 255 : 0]
  }, []);
};

class NumberIdentifier extends React.Component {
  static propTypes = {
    application: React.PropTypes.object,
    actions: React.PropTypes.object,
    predictions: React.PropTypes.array
  }

  constructor(props) {
    super(props);
    this.state = {
      image: null,
      imageArray: []
    };

    this.canvasSize = 100;
  }

  @autobind
  getPredictionHistory() {
    return this.props.predictions.map((prediction, i) => ({
      imageUrl: this.state.imageArray[i],
      prediction
    }));
  }

  @autobind
  submitNumber(data) {
    // Clear the canvas
    const canvas = this.refs.test.refs.drawingCanvas;
    const context = canvas.getContext('2d');

    // Save image from original full size image
    const image = new Image;
    image.src = canvas.toDataURL('image/png');
    this.setState({
      imageArray: [image.src, ...this.state.imageArray]
    });

    // Clear canvas
    context.clearRect(0, 0, this.canvasSize, this.canvasSize);
    context.beginPath();
    context.save();

    // Save scaled down version of original canvas
    context.drawImage(image, 0, 0, 20, 20);
    context.save();

    // Get image data of scaled down image
    let smallImageData = context.getImageData(0, 0, 20, 20).data;

    smallImageData = Array.prototype.slice.call(formatBitmapData(smallImageData));

    // Clear canvas again
    context.clearRect(0, 0, this.canvasSize, this.canvasSize);
    context.beginPath();
    context.save();

    this.props.actions.submitNumberImage({
      image: JSON.stringify(smallImageData),
      value: parseInt(data.number, 10)
    });
  }

  @autobind
  storeImage(image) {
    this.setState({image});
  }

  render() {
    const predictionHistory = this.getPredictionHistory();
    return (
      <C.Container style={{paddingTop: 16}}>
        <C.Form onSubmit={this.submitNumber}>
          <div>
            <C.DrawingCanvas
              label='Draw Number 0 - 9'
              onMouseUp={this.storeImage}
              width={this.canvasSize}
              height={this.canvasSize}
              ref='test'
            />
          </div>
          <C.TextInput
            label='Number'
            name='number'
            style={{width: this.canvasSize}}
            type='number'
            min='0'
            max='9'
            required={true}
          />
          <C.Submit
            value='SUBMIT'
            style={{width: this.canvasSize}}
          />
        </C.Form>
        <C.Column style={{padding: 0}}>
          {
            predictionHistory.map((row, i) =>
              <PredictionRow
                prediction={row.prediction}
                imageUrl={row.imageUrl}
                key={i}
              />
            )
          }
        </C.Column>
      </C.Container>
    );
  }
}

export default storeConnect(['application', {predictions: 'numberIdentifier.predictions'}], numberIdentifierActions)(NumberIdentifier);
