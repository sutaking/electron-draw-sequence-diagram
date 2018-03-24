import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import TextArea from './components/TextArea';
import Button from './components/Button';
import SvgArea from './components/SvgArea';

class App extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="container">
                <div className="item-left">
                    <TextArea />
                    <Button />
                </div>
                <div className="item-right">
                    <SvgArea />
                    <canvas id="canvas"></canvas> 
                </div>
            </div>
        )
    }
}

export default App;