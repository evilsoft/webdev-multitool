import electron from 'electron'
import path     from 'path'

const { app, BrowserWindow } = electron

const html = path.join(__dirname, '../../', 'index.html')

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('ready', () => {
  let main
  main = new BrowserWindow({width: 800, height: 600})
  main.loadURL(`file://${html}`)

  main.on('closed', () => {
    main = null
  })
})
