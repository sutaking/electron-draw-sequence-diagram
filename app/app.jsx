import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import TextArea from './components/TextArea';
import Button from './components/Button';
import SvgArea from './components/SvgArea';

import canvg from './vendor/canvg';
import downloadsFolder from 'downloads-folder';
import canvasBuffer from 'electron-canvas-to-buffer';
import path from 'path';
import fs from 'fs';

const infoBar ={
    position:'absolute',
    bottom: '0px',
    height : '22px',
    width: '100%',
    lineHeight:'22px',
    fontSize: '13px',
    fontFamily: '"Andale Mono", monospace',
    color:'white',
    backgroundColor:'#2196F3',
};

class App extends PureComponent {
    constructor(props) {
        super(props);
        
        this.svgDom = '';
        this.downloadImage = this.downloadImage.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.changeTheme = this.changeTheme.bind(this);
        this.theme = false;

        this.state = {
            options : {
                theme: 'simple'
            },
            infoText: 'Hi, Welcome to use electron draw sequence diagram!',
            inputTxt: 'a->b:c',
            height: window.innerHeight-22,
            width:300,
            svgL:300+54
        };
    }
    updateLayout() {
        let w = window.innerWidth;
        let h = window.innerHeight;
        console.log(`w:${w}, h:${h}`);
        this.setState({
            height: window.innerHeight-22            
        });

    }

    componentDidMount() {        
        window.addEventListener('resize', this.updateLayout.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateLayout.bind(this));
    }

    downloadImage() {
        console.log('-- downloadImage --');
        
        let svgText = ReactDOM.findDOMNode(this.svgDom).childNodes[0].outerHTML;
        canvg('canvas', svgText);
        let buffer = canvasBuffer(canvas, 'image/png');
        let imageName = path.join(downloadsFolder(), '/image.png');
        
        fs.writeFile(imageName, buffer, () => {
            console.log(imageName);

            this.setState({
                infoText: `Download file: ${imageName} successful.`
            });            
        });

    }

    handleChange(evt) {
        console.log('-- handleChange --');
        
        this.setState({
            inputTxt: evt.target.value
        });
        console.log(this.state.inputTxt);
    }

    changeTheme() {
        console.log('-- changeTheme --');

        this.setState({
            options : {
                theme: this.theme ? 'simple':'hand'
            },
            infoText: `Change Theme: ${this.theme ? 'Simple':'Hand'}`
        });
        this.theme =!this.theme;
    }

    render() {
        let btns = [];
        btns.push({
            click:this.downloadImage,
            icon:'fa-download'
        });
        btns.push({icon:'fa-file-code-o'});
        btns.push({
            click:this.changeTheme,
            icon:'fa-magic'
        });
        btns.push({icon:'fa-plus-circle'});
        btns.push({icon:'fa-minus-circle'});

        btns.push({icon:'fa-github'});

        return (
            <div className="container">
                <div 
                    className="tool-bar"
                    style={{height:`${this.state.height}px`}}>
                    {btns.map((obj,i)=> {
                        return <Button  id={i} key={i} click={obj.click} icon={obj.icon} />
                    })}
                </div>
                <div 
                    className="item-text"
                    style={{height:`${this.state.height}px`, width:`${this.state.width}px`}}>
                    <TextArea 
                        value = {this.state.inputTxt}
                        onChange={this.handleChange}/>
                    
                </div>
                <div 
                    className="item-svg"
                    style={{left:`${this.state.svgL}px`}}>
                    <SvgArea 
                        ref={(data) => {this.svgDom = data;}}
                        text={this.state.inputTxt}
                        opts={this.state.options}/>
                    <canvas 
                        id="canvas" 
                        style={{visibility: 'hidden'}}/>
                </div>
                <div style={infoBar} >{this.state.infoText}</div>
            </div>
        )
    }
}

export default App;