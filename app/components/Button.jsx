import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const btnStyles = {
    fontSize:'28px',
    textShadow: '0px 1px 1px rgba(0, 0, 0, .7)'
}

class Button extends PureComponent {
    constructor(props) {
        super(props);
        //console.log(this.props.alt);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);

        this.state = {
            color: '#BBDEFB'
        };
        this.positions = [20, 70, 120,170];
    }

    handleFocus() {
        this.setState({
            color: 'white'
        });
    }

    handleBlur() {
        this.setState({
            color: '#BBDEFB' 
        });
    }

    render() {
        let btnStyle = {
            color:this.state.color
        };
        if(this.props.id === 5) {
            btnStyle.bottom = '15px';
        } else {
            btnStyle.top = `${60*this.props.id+20}px`;
        }
        
        return (
            <div className="btn-save" 
                style={btnStyle}
                onClick={this.props.click} 
                onMouseEnter={this.handleFocus}
                onMouseLeave={this.handleBlur}>
                    <i className={`fa ${this.props.icon}`} style={btnStyles}></i>
            </div>
        )
    }
}

export default Button;