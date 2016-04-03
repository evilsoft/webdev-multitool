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
  let { webContents } = main

  function navigate(page) {
    webContents.send('navigate', page)
  }

  main.loadURL(`file://${html}`)

  Menu.setApplicationMenu(Menu.buildFromTemplate(menus({ navigate })))

  main.on('closed', () => {
    main = null
  })
})
