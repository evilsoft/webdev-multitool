import electron from 'electron'
import path     from 'path'

import menus  from './menus'

import sendToChannel from '../lib/sendToChannel'

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

  const navigate  = sendToChannel(webContents, 'navigate')

  main.loadURL(`file://${html}`)

  Menu.setApplicationMenu(Menu.buildFromTemplate(menus({ navigate })))

  main.on('closed', () => {
    webContents = null
    main = null
  })
})
