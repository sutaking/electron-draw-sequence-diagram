const electron = require('electron');
const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');
const app = electron.app;

const { BrowserWindow } = require('electron');


let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        /*webPreferences: {
            nodeIntegration: false
        }*/
        //titleBarStyle: 'hidden',
        title: 'Make Your Seqeunce Diagram'
    });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, './app/index.html'),
        protocol: 'file:',
        slashes: true
    }));
    mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function() {

        mainWindow = null;
    });

}

app.on('ready', () => {
    console.log(`--- ready ---`);
    createWindow();
})

app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', function() {
    if (mainWindow === null) {
        createWindow();
    }
})

