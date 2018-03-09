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
		width:1200,
		height:715,
  		resizable: false,
  		// titleBarStyle: 'hiddenInset'
	});
	mainWindow.setIgnoreMouseEvents(false)
	//Load html into window
	mainWindow.loadURL(url.format({
		pathname: 'https://scout-sports.herokuapp.com'
		//pathname: path.join(__dirname,'main.html'),
		//protocol:'file',
		//slashes:true
	}));
});