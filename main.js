const { app, BrowserWindow } = require('electron')

let win;

function createWindow() {
    win = new BrowserWindow({
        width:1280,
        height: 720,
        backgroundColor: '#ffffff',
        icon:`file://${__dirname}/dist/assets/logo.png`
    })

    win.loadURL(`file://${__dirname}/dist/gerador-planilha/index.html`)

    // win.webContents.openDevTools();

    win.on('closed', function () {
        win=null
    })
}

app.on('ready', createWindow)