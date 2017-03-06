import React from 'react';
import {autobind} from 'core-decorators';
import {isNumber} from 'lodash';

import storeConnect from '../addons/storeConnect';
import {numberIdentifierActions} from '../../actions';

import * as C from '../shared';
import PredictionRow from './NumberIdentifier/PredictionRow';

const formatBitmapData = data => data
                                  .filter((n, i) => (i + 1) % 4 === 0)
                                  .map(n => (n === 0 ? 0 : 1));

// const bitmapToPNG = data => {
//   return data.reduce((storage, n) => {
//     return [...storage, 0, 0, 0, n > 0 ? 255 : 0];
//   }, []);
// };

class NumberIdentifier extends React.Component {
  static propTypes = {
    application: React.PropTypes.object,
    actions: React.PropTypes.object,
    prediction: React.PropTypes.number
  }

  constructor(props) {
    super(props);
    this.state = {
      image: null,
      imageArray: []
    };

    this.canvasSize = 250;
  }


  @autobind
  submitNumber(data) {
    // Clear the canvas
    const canvas = this.refs.numberCanvas.refs.drawingCanvas;
    const context = canvas.getContext('2d');

    // Save image from original full size image
    const image = new Image;
    image.src = canvas.toDataURL('image/png');
    this.setState({
      imageArray: [...this.state.imageArray, image.src]
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
    return (
      <div>
        <C.Hero title='Number Identifier'/>
        <C.Container className='add-margin-top'>
          <C.Row>
            <C.Column columns={4}>
              <C.Form onSubmit={this.submitNumber}>
                <C.Text fontSize={7}>Draw Number</C.Text>
                <C.DrawingCanvas
                  label='Draw Number 0 - 9'
                  onMouseUp={this.storeImage}
                  width={this.canvasSize}
                  height={this.canvasSize}
                  ref='numberCanvas'
                />
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
              {
                isNumber(this.props.prediction) &&
                <PredictionRow
                  prediction={this.props.prediction}
                  imageUrl={this.state.imageArray[this.state.imageArray.length - 1]}
                />
              }
            </C.Column>
            <C.Column columns={8}>
              <C.Text fontSize={7}>How It Works</C.Text>
              <C.Text fontSize={6} style={{marginTop: 8}}>User Input</C.Text>
              <C.Text fontSize={4}>
                User draws a number in the 100x100 pixel canvas to the left.
                I reize the canvas drawing into a 20x20 pixel image, then format the image bitmap
                into a 20x20 array where coloered pixels are denoted by 1 and all other indices are 0.
                This array serves as the input to my identification algorithm
              </C.Text>
              <C.Text fontSize={6} style={{marginTop: 8}}>Identification Algorithm</C.Text>
              <C.Text fontSize={4}>
                I utilize a multi-class logistic regression algorithm to try to identify the
                best match for the user hand-drawn image.
                First, the array generated from the user input is formatted into the feature data used to train the algorithm.
                Second, I run the formatted image data inputs against the coefficients belonging to each output value (0 through 9).
                These values are run through a sigmoid function (to normalize values between 0 and 1) and the number with the highest value is returned.
              </C.Text>
              <C.Text fontSize={6} style={{marginTop: 8}}>Training Data</C.Text>
              <C.Text fontSize={4}>
                My training data consists of 500 images I drew myself.
                This is problematic for several reasons (see below).
                I tried using open source data but found it significantly reduced the accuracy of my algorithm,
                largely because of the way training data was formatted.
              </C.Text>
              <C.Text fontSize={6} style={{marginTop: 8}}>Areas for Improvement</C.Text>
              <C.Text fontSize={4}>
                 There are a lot of was my algorithm could be substantially improved:
                 <br/>1. Properly use open source training data so the number of training examples is significantly
                 higher and the algoirhtm isn't trained on one person's hand writing
                 <br/>2. Try using a neural network which would likely be more accurate than a simple logistic regression could be
                 <br/>3. Develop more sophisticated features
              </C.Text>
            </C.Column>
          </C.Row>

        </C.Container>
      </div>
    );
  }
}

export default storeConnect(
  [
    'application',
    {prediction: 'numberIdentifier.prediction'}
  ],
  numberIdentifierActions
)(NumberIdentifier);
