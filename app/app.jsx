import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import TextArea from './components/TextArea';
import Button from './components/Button';
import SvgArea from './components/SvgArea';

import electron from 'electron';
const screen = electron.screen;

import canvg from './vendor/canvg';
import downloadsFolder from 'downloads-folder';
import canvasBuffer from 'electron-canvas-to-buffer';
import path from 'path';
import fs from 'fs';

const infoBar ={
    postition:'absolute',
    bottom: '22px',
    height : '22px',
    width: '100%',
    backgroundColor:'blue',
};

class App extends PureComponent {
    constructor(props) {
        super(props);

        this.options = {
            theme: 'simple'
        };
        let displays = electron.screen.getPrimaryDisplay();
        console.log(displays)
        this.svgDom = '';
        this.downloadImage = this.downloadImage.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            inputTxt: 'a->b:c'
        };
    }

    componentDidMount() {
        
    }

    downloadImage() {
        console.log('-- downloadImage --');
        //console.log(ReactDOM.findDOMNode(this.svgDom));
        
        let svgText = ReactDOM.findDOMNode(this.svgDom).childNodes[0].outerHTML;
        canvg('canvas', svgText);
        let buffer = canvasBuffer(canvas, 'image/png');
        let imageName = path.join(downloadsFolder(), '/image.png');
        
        fs.writeFile(imageName, buffer, function() {
            console.log(imageName);
            /*$timeout(() => {
                //$scope.imgLocation = `${$filter('date')(new Date(),'yyyy-MM-dd HH:mm:ss')}:\n${imageName}`;
            }, 0);*/

        });
    }

    handleChange(evt) {
        console.log('-- handleChange --');
        
        this.setState({
            inputTxt: evt.target.value
        });
        console.log(this.state.inputTxt);
    }

    render() {

        return (
            <div className="container">
                <div className="item-text">
                    <TextArea 
                        value = {this.state.inputTxt}
                        onChange={this.handleChange}/>
                    <Button 
                        alt={this.downloadImage} />
                </div>
                <div className="item-svg">
                    <SvgArea 
                        ref={(data) => {this.svgDom = data;}}
                        text={this.state.inputTxt}
                        opts={this.options}/>
                    <canvas 
                        id="canvas" 
                        style={{visibility: 'hidden'}}/>
                </div>
                <div style={infoBar}/>
            </div>
        )
    }
}

export default App;