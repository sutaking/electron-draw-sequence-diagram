import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const btnStyles = {
    fontSize:'28px'
}

class Button extends PureComponent {
    constructor(props) {
        super(props);
        //console.log(this.props.alt);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);

        this.state = {
            color: 'red'
        }
    }

    handleFocus() {
        this.setState({
            color: 'white'
        });
    }

    handleBlur() {
        this.setState({
            color: 'red'
        });
    }

    render() {
        return (
            <div className="btn-save" 
                style={{color:this.state.color}}
                onClick={this.props.alt} 
                onMouseEnter={this.handleFocus}
                onMouseLeave={this.handleBlur}>
                    <i className="fa fa-download" style={btnStyles}></i>
            </div>
        )
    }
}

export default Button;