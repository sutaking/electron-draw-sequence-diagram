import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TextArea extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <textarea id="input1" className="input-text" cols="10" rows="5" />
        )
    }
}

export default TextArea;