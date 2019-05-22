const { app, BrowserWindow } = require('deskgap');

let mainWindow;

app.once('ready', () => {
  mainWindow = new BrowserWindow({
    show: false,
    title: 'DeskGap Murphy',
    width: 800,
    height: 600,
  }).once('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.loadURL("http://localhost:3000");

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
