import React, { PureComponent } from 'react';

import SequenceDiagram from 'react-sequence-diagram';

class SvgArea extends React.Component {
    constructor(props) {
        super(props);
        this.onError = this.onError.bind(this);
    }

    onError (err) {
        console.log(err);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps);

        return true;//this.timer();
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