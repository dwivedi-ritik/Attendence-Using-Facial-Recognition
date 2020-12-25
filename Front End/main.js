// Modules to control application life and create native browser window
const {app, BrowserWindow , Menu} = require('electron')
const path = require('path')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    title:"Face Recognition",
    width: 1280,
    height: 720,
    icon : "./front end/icon.jpg",
    webPreferences:{
      nodeIntegration:true,
      enableRemoteModule:true
    }
  })
  mainWindow.loadFile('./Web el/index.html')
  // mainWindow.webContents.openDevTools();
}


app.whenReady().then(() => {
  createWindow()  
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
