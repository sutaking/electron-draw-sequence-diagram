import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import canvg from 'canvg';

class Button extends PureComponent {
    constructor(props) {
        super(props);
        //console.log(this.props.alt);
    }

    render() {
        return (
            <button className="btn-save" onClick={this.props.alt}>
                    <i className="fa fa-download" style={{lineHeight:'100%',fontSize:'5vmin'}}></i>
            </button>
        )
    }
}

export default Button;