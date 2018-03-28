import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const btnStyles = {
    //lineHeight:'100%',
    fontSize:'30px'
}

class Button extends PureComponent {
    constructor(props) {
        super(props);
        //console.log(this.props.alt);
    }

    render() {
        return (
            <button className="btn-save" onClick={this.props.alt}>
                    <i className="fa fa-download" style={btnStyles}></i>
            </button>
        )
    }
}

export default Button;