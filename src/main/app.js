import electron from 'electron'
import path     from 'path'

import menus  from './menus'

const { app, BrowserWindow, Menu } = electron

const html = path.join(__dirname, '../../', 'index.html')

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('ready', () => {
  let main = new BrowserWindow({width: 800, height: 600})
  main.loadURL(`file://${html}`)

  Menu.setApplicationMenu(Menu.buildFromTemplate(menus()))

  main.on('closed', () => {
    main = null
  })
})
