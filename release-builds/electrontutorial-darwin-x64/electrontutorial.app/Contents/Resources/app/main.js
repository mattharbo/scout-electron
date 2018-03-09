const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;

//Variables
let mainWindow;

//Listen for the app to be ready
app.on('ready', function(){
	//Create a new window
	mainWindow = new BrowserWindow({
		width:1260,
		height:700
	});
	//Load html into window
	mainWindow.loadURL(url.format({
		pathname: 'https://www.google.com'
		//pathname: path.join(__dirname,'main.html'),
		//protocol:'file',
		//slashes:true
	}));
});