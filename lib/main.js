const gui = require('gui')

const MainWindow = require('./view/main-window')

const win = new MainWindow()
win.window.onClose = () => gui.MessageLoop.quit()
win.window.setContentSize({width: 400, height: 400})
win.window.center()
win.window.activate()