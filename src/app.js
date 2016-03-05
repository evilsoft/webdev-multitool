import electron from 'electron'
import path     from 'path'

const { app, BrowserWindow } = electron

const html = path.join(__dirname, '../', 'index.html')
let mainWindow

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('ready', () => {
  mainWindow = new BrowserWindow({width: 800, height: 600})
  mainWindow.loadURL(`file://${html}`)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
})
