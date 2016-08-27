import React from 'react';
import * as C from '../../shared';

class FaqSection extends React.Component {
  static propTypes = {
    faq: React.PropTypes.object
  }

  render() {
    const {faq} = this.props;
    return (
      <C.Link href={`/faqs/${this.props.faq.id}`}>
        <div className='faq-overview'>
          <C.Text>{faq.name}</C.Text>
        </div>
      </C.Link>
    );
  }
}

export default FaqSection;
