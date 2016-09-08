import React from 'react';
import {merge} from 'lodash';

import storeConnect from '../addons/storeConnect';

import * as C from '../shared';

class Section extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    style: React.PropTypes.object,
    children: React.PropTypes.node
  }

  render() {
    return (
      <div>
        <div
          style={merge({
            width: '100%',
            height: '20px',
            backgroundColor: 'black',
            lineHeight: '20px',
            fontSize: '16px',
            textAlign: 'center',
            color: 'white',
            marginBottom: 20,
            marginTop: 20
          }, this.props.style)}
        >
          {this.props.title}
        </div>
        <div style={{marginLeft: 16, marginRight: 16}}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

class ColorBlockContainer extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  }

  render() {
    return (
      <div
        style={{
          width: '100%',
          height: '60px',
          marginTop: '10px',
          marginBottom: '10px',
          overflow: 'none'
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

class ColorBlock extends React.Component {
  static propTypes = {
    color: React.PropTypes.string,
    name: React.PropTypes.string
  }

  render() {
    return (
      <div
        style={{
          height: '60px',
          marginLeft: '10px',
          marginRight: '10px',
          width: '150px',
          textAlign: 'center',
          float: 'left',
          backgroundColor: this.props.color || 'black'
        }}
      >
        <p style={{marginTop: 10, marginBottom: 5, weight: 'bold'}}>{this.props.name}</p>
        <p>{this.props.color}</p>
      </div>
    );
  }
}


class Reference extends React.Component {
  static propTypes = {
    application: React.PropTypes.object
  }

  render() {
    // const {user} = this.props.application;

    return (
      <C.Container isFullWidth={true}>
        <Section title='Colors'>
          <ColorBlockContainer>
            <ColorBlock name='$blue-1' color='#063c4a'/>
            <ColorBlock name='$blue-2' color='#006680'/>
            <ColorBlock name='$blue-3' color='#00a6cf'/>
            <ColorBlock name='$blue-4' color='#3ac1e1'/>
            <ColorBlock name='$blue-5' color='#72cee4'/>
          </ColorBlockContainer>

          <ColorBlockContainer>
            <ColorBlock name='$teal-1' color='#0dceaf'/>
            <ColorBlock name='$teal-2' color='#78dece'/>
            <ColorBlock name='$red-1' color='#e7465a'/>
            <ColorBlock name='$red-2' color='#dc848f'/>
            <ColorBlock name='$yellow-1' color='#fdb813'/>
            <ColorBlock name='$yellow-2' color='#f7cd68'/>
          </ColorBlockContainer>

          <ColorBlockContainer>
            <ColorBlock name='$gray-1' color='#333'/>
            <ColorBlock name='$gray-2' color='#666'/>
            <ColorBlock name='$gray-3' color='#828282'/>
            <ColorBlock name='$gray-4' color='#d2d2d2'/>
            <ColorBlock name='$gray-5' color='#efeeec'/>
            <ColorBlock name='$gray-6' color='#fafafa'/>
          </ColorBlockContainer>
        </Section>

        <Section title='Fonts'>
          <C.Text fontSize={1}>Font Size 1</C.Text>
          <C.Text fontSize={2}>Font Size 2</C.Text>
          <C.Text fontSize={3}>Font Size 3</C.Text>
          <C.Text fontSize={4}>Font Size 4</C.Text>
        </Section>

        <Section title='Grid'>
          <C.Container centerContent={true}>
            Standard Width Container
          </C.Container>
          <C.Container style={{backgroundColor: 'rgb(239, 233, 233)'}}>
            <C.Row style={{backgroundColor: 'yellow', height: '40px'}}>
              <C.Column columns={1} style={{backgroundColor: 'orange'}}>1</C.Column>
              <C.Column columns={2} style={{backgroundColor: 'blue'}}>2</C.Column>
              <C.Column columns={3} style={{backgroundColor: 'red'}}>3</C.Column>
              <C.Column columns={4} style={{backgroundColor: 'blue'}}>4</C.Column>
              <C.Column columns={1} style={{backgroundColor: 'green'}}>1</C.Column>
              <C.Column columns={1} style={{backgroundColor: 'orange'}}>1</C.Column>
            </C.Row>
            Row Flex Align Left (Default)
            <C.Row columns={12} style={{height: '40px'}}>
              <C.Column columns={3} style={{backgroundColor: 'red'}}>3</C.Column>
              <C.Column columns={4} style={{backgroundColor: 'blue'}}>4</C.Column>
              <C.Column columns={1} style={{backgroundColor: 'green'}}>1</C.Column>
            </C.Row>
            Row Flex Align Center
            <C.Row columns={12} style={{height: '40px'}} align='center'>
              <C.Column columns={3} style={{backgroundColor: 'red'}}>3</C.Column>
              <C.Column columns={4} style={{backgroundColor: 'blue'}}>4</C.Column>
              <C.Column columns={1} style={{backgroundColor: 'green'}}>1</C.Column>
            </C.Row>
            Row Flex Align Right
            <C.Row columns={12} style={{height: '40px'}} align='right'>
              <C.Column columns={3} style={{backgroundColor: 'red'}}>3</C.Column>
              <C.Column columns={4} style={{backgroundColor: 'blue'}}>4</C.Column>
              <C.Column columns={1} style={{backgroundColor: 'green'}}>1</C.Column>
            </C.Row>
          </C.Container>
          <C.Container centerContent={true}>
            Full Width Container
          </C.Container>
          <C.Container isFullWidth={true} style={{backgroundColor: 'rgb(239, 233, 233)'}}>
           <C.Row style={{backgroundColor: 'yellow', height: '40px'}}>
             <C.Column columns={1} style={{backgroundColor: 'orange'}}>1</C.Column>
             <C.Column columns={2} style={{backgroundColor: 'blue'}}>2</C.Column>
             <C.Column columns={3} style={{backgroundColor: 'red'}}>3</C.Column>
             <C.Column columns={4} style={{backgroundColor: 'blue'}}>4</C.Column>
             <C.Column columns={1} style={{backgroundColor: 'green'}}>1</C.Column>
             <C.Column columns={1} style={{backgroundColor: 'orange'}}>1</C.Column>
           </C.Row>
           Row Flex Align Left (Default)
           <C.Row columns={12} style={{height: '40px'}}>
             <C.Column columns={3} style={{backgroundColor: 'red'}}>3</C.Column>
             <C.Column columns={4} style={{backgroundColor: 'blue'}}>4</C.Column>
             <C.Column columns={1} style={{backgroundColor: 'green'}}>1</C.Column>
           </C.Row>
           Row Flex Align Center
           <C.Row columns={12} style={{height: '40px'}} align='center'>
             <C.Column columns={3} style={{backgroundColor: 'red'}}>3</C.Column>
             <C.Column columns={4} style={{backgroundColor: 'blue'}}>4</C.Column>
             <C.Column columns={1} style={{backgroundColor: 'green'}}>1</C.Column>
           </C.Row>
           Row Flex Align Right
           <C.Row columns={12} style={{height: '40px'}} align='right'>
             <C.Column columns={3} style={{backgroundColor: 'red'}}>3</C.Column>
             <C.Column columns={4} style={{backgroundColor: 'blue'}}>4</C.Column>
             <C.Column columns={1} style={{backgroundColor: 'green'}}>1</C.Column>
           </C.Row>
          </C.Container>
        </Section>

        <Section title='Buttons'>

          <C.Button text='Button' />
          <C.Button text='Button' bStyle='transparent' className='add-margin-left'/>
          <C.Button text='Button' bColor='red' className='add-margin-left'/>
          <C.Button text='Button' bColor='red' bStyle='transparent' className='add-margin-left'/>
          <C.Button text='Button' bColor='teal' className='add-margin-left'/>
          <C.Button text='Button' bColor='teal' bStyle='transparent' className='add-margin-left'/>
          <C.Button text='Button' bColor='yellow' className='add-margin-left'/>
          <C.Button text='Button' bColor='yellow' bStyle='transparent' className='add-margin-left'/>
        </Section>

        <Section title='Hero'>
          <C.Hero title='Hero Component'/>
        </Section>

        <Section title='Form'>
          <C.Form style={{width: '400px'}}>
            <C.TextInput
              name='test'
              placeholder='Text Input'
              label='Label'
            />
            <C.TextArea
              name='test2'
              placeholder='Text Area'
              label='Text Area'
              rows='5'
            />
            <C.Submit />
          </C.Form>
        </Section>

        <Section title='Text Editor'>
          <C.TextEditor/>
        </Section>
      </C.Container>
    );
  }
}

export default storeConnect(['application'])(Reference);
