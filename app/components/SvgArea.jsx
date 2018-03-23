import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import SequenceDiagram from 'react-sequence-diagram';

const input =
  'Andrew->China: Says Hello\n' +
  'Note right of China: China thinks\\nabout it\n' +
  'China-->Andrew: How are you?\n' +
  'Andrew->>China: I am good thanks!';
 
const options = {
  theme: 'simple'
};
 
function onError(error) {
  console.log(error);
}

class SvgArea extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <SequenceDiagram input={input} options={options} onError={onError} />
        )
    }
}

export default SvgArea;