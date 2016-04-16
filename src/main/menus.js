const thunkApply  = fn => (...args) => () => fn(...args)

function reload(item, win) {
  if(win) {
    win.reload()
  }
}

function toggleDevTools(item, win) {
  if(win) {
    win.toggleDevTools()
  }
}

export default function menus(hooks) {
  const { navigate } = hooks

  const navigateTo = thunkApply(navigate)

  return [
    {
      label: 'Tools',
      submenu: [
        { label: 'Encode/Decode', click: navigateTo('encode') },
        { label: 'Generate', click: navigateTo('generate') },
        { label: 'Format', click: navigateTo('format') },
        { label: 'Color', click: navigateTo('color') },
        { label: 'Web Request', click: navigateTo('web') }
      ]
    }, {
      label: 'Edit',
      submenu: [
        { label: 'Undo', accelerator: 'CmdOrCtrl+Z', role: 'undo' },
        { label: 'Redo', accelerator: 'CmdOrCtrl+Y', role: 'redo' },
        { type: 'separator' },
        { label: 'Cut', accelerator: 'CmdOrCtrl+X', role: 'cut' },
        { label: 'Copy', accelerator: 'CmdOrCtrl+C', role: 'copy' },
        { label: 'Paste', accelerator: 'CmdOrCtrl+V', role: 'paste' },
        { type: 'separator' },
        { label: 'Select All', accelerator: 'CmdOrCtrl+A', role: 'selectall' },
      ]
    }, {
      label: 'Dev',
      submenu: [
        { label: 'Reload', accelerator: 'CmdOrCtrl+R', click: reload },
        { label: 'Dev Tools', accelerator: 'Shift+CmdOrCtrl+I', click: toggleDevTools },
      ]
    }
  ]
}
