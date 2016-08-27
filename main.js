const app = require('electron').app
const BrowserWindow = require('electron').BrowserWindow

let mainWindow = null

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
})

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 800, height: 600, frame: true, transparent: false});
  mainWindow.loadURL('file://' + __dirname + '/src/index.html');
  mainWindow.on('closed', function() {
    mainWindow = null;
  })
})
