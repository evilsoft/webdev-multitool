import electron from 'electron'
import path     from 'path'

import menus  from './menus'

import sendToChannel from '../lib/sendToChannel'

import compose  from 'ramda/src/compose'
import objOf    from 'ramda/src/objOf'

import { v4 } from 'node-uuid'

const { app, BrowserWindow, Menu, ipcMain } = electron

const html = path.join(__dirname, '../../', 'index.html')
const thunk = fn => () => fn()

const wrapUuid = compose(objOf('uuid'), v4)

function generateUUID(fn, num) {
  return Array(parseInt(num)).fill(null).map(fn)
}

ipcMain.on('task', (e, data) => {
  const { type } = data
  const send = sendToChannel(e.sender, type)

  switch(type) {
    case 'uuid':
      const { num } = data
      send(generateUUID(thunk(wrapUuid), num))
      break
  }
})

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('ready', () => {
  let main = new BrowserWindow({width: 800, height: 600})

  const navigate  = sendToChannel(main.webContents, 'navigate')

  main.loadURL(`file://${html}`)

  Menu.setApplicationMenu(Menu.buildFromTemplate(menus({ navigate })))

  main.on('closed', () => {
    Menu.setApplicationMenu(null)
    main = null
  })
})
