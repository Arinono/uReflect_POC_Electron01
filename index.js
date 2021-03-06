// to have access to local or global scripts
require(process.cwd() + '/node_modules/benja').paths();

// simple server example
require('http')
  .createServer(require('tiny-cdn').create({}))
  .listen(8080, '0.0.0.0');
  // will respond to :80 too via iptables

// Debug tools
require('electron-debug')({showDevTools: false});

// simple app example
const electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

// in case by default WebGL doesn't work ... (rpi or others)
app.commandLine.appendSwitch('--ignore-gpu-blacklist');

// once the app is ready
app.once('ready', () => {

  const area = electron.screen.getPrimaryDisplay().workAreaSize;

  // a reference is needed so the GC
  // won't kill the view
  this.window = new BrowserWindow({
    backgroundColor: '#000000',
    frame: false,
    // in some case kiosk: true is not working
    // same goes for fullscreen but this is working
    fullscreen: false, // true,
    x: 0,
    y: 0,
    width: 1360, // area.width,
    height: 768 // area.height
  });

  this.window
    .once('closed', () => {
      // cleanup the reference
      this.window = null;
    })
    .loadURL('http://localhost:8080/');
    // test CSS
 // .loadURL('https://codepen.io/bennettfeely/full/tfbCo/');
    // test WebGL
 // .loadURL('http://get.webgl.org/');
    // stress WebGL
 // .loadURL('https://threejs.org/examples/webgl_geometry_cube.html');


  // for debugging purpose, it might be handy to be able
  // to reload the window simply via `touch ~/app/reload`
  require('fs').watch('reload', () => app.quit());
});
