function navigate(page) {
  return () => console.log(page)
}

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

export default function menus() {
  return [
    {
      label: 'Tools',
      submenu: [
        { label: 'Encode/Decode', click: navigate('encode') },
        { label: 'Generate', click: navigate('generate') },
        { label: 'Format', click: navigate('format') },
        { label: 'Color', click: navigate('color') },
        { label: 'Web Request', click: navigate('web') }
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
