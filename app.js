'use strict';
const electron = require('electron');
const app = electron.app;

let mainWindow;

function onClosed() {
	mainWindow = null;
}

function createMainWindow() {
	const win = new electron.BrowserWindow({
		width: 1000,
		height: 600
	});

	win.loadURL(`file://${__dirname}/index.html`);
	win.on('closed', onClosed);

	return win;
}

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate-with-no-open-windows', () => {
	if (!mainWindow) {
		mainWindow = createMainWindow();
	}
});

app.on('ready', () => {
	mainWindow = createMainWindow();
});
