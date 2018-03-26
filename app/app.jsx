import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import TextArea from './components/TextArea';
import Button from './components/Button';
import SvgArea from './components/SvgArea';

import canvg from './vendor/canvg';

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.svgDom = '';
        this.downloadImage = this.downloadImage.bind(this);
    }

    componentDidMount() {
        
    }

    downloadImage() {
        console.log('-- downloadImage --');
        //console.log(ReactDOM.findDOMNode(this.svgDom));
        
        let svgText = ReactDOM.findDOMNode(this.svgDom).childNodes[0].outerHTML;
        //let svgText = document.getElementsByTagName('svg')[0].outerHTML;
        canvg('canvas', svgText);
    }

    render() {

        return (
            <div className="container">
                <div className="item-left">
                    <TextArea />
                    <Button alt={this.downloadImage} />
                </div>
                <div className="item-right">
                    <SvgArea ref={(textInput) => {this.svgDom = textInput;}}/>
                    <canvas id="canvas" />
                </div>
            </div>
        )
    }
}
//style={{visibility: 'hidden'}}
export default App;