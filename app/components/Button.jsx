import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Button extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className="btn-save">
                    <i className="fa fa-download " style={{lineHeight:'100%',fontSize:'5vmin'}}></i>
            </button>
        )
    }
}

export default Button;