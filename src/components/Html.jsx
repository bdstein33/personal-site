import React from 'react';
import serialize from 'serialize-javascript';

class Html extends React.Component {
  static propTypes = {
    store: React.PropTypes.object,
    markup: React.PropTypes.node
  };


  render() {
    const {store, markup} = this.props;

    return (
      <html>
        <head>
          <title>Redux Example</title>
        </head>
        <body>
          <div id='app' dangerouslySetInnerHTML={{__html: markup}}></div>
          <script dangerouslySetInnerHTML={{__html: `window.__data=${serialize(store.getState())};`}} charSet='UTF-8'/>
          <script src='/public/js/main.js'></script>
        </body>
      </html>
    );
  }
}

export default Html;
