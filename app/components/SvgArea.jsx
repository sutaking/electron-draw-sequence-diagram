import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import SequenceDiagram from 'react-sequence-diagram';

class SvgArea extends PureComponent {
    constructor(props) {
        super(props);
        this.onError = this.onError.bind(this);
    }

    onError (err) {
        console.log(err);
    }

    render() {

        return(
            <SequenceDiagram 
                input={this.props.text} 
                options={this.props.opts} 
                onError={this.onError} />
        )
    }
}

export default SvgArea;