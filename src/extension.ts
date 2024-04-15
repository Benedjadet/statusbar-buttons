// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import fs from 'fs'

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	var path = ""

	

	if(vscode.workspace.workspaceFolders !== undefined)
	{
		path = vscode.workspace.workspaceFolders[0].uri.path + "/.vscode/statusbar-buttons.json"
		console.log(path)

		path = path.substring(1, path.length)
		console.log(path)
		var daraArray = JSON.parse(fs.readFileSync(path, 'utf-8'))
		console.log(daraArray.buttons.length)
		console.log(daraArray.buttons[0].text)
	}

	else
	{
		vscode.window.showErrorMessage('There isn\'t any Workspaces!');
	}





	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "statusbar-buttons" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('statusbar-buttons.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from VSCode Statusbar Buttons!');
	});

	let disposable2 = vscode.commands.registerCommand('statusbar-buttons.bayWorld2', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Bay World from VSCode Statusbar Buttons!');
	});

	let refresh = vscode.commands.registerCommand('statusbar-buttons.refresh', () => {
		vscode.window.showInformationMessage('Refresh Statusbar Buttons!');
	});


	let statusBarItem = vscode.window.createStatusBarItem("testButton", vscode.StatusBarAlignment.Left, 1)


	


	context.subscriptions.push(statusBarItem)

	statusBarItem.text = "Test button"
	statusBarItem.command = "statusbar-buttons.bayWorld2"
	statusBarItem.tooltip = "This is a tip"

	statusBarItem.show()

	context.subscriptions.push(disposable);
	context.subscriptions.push(disposable2);
	context.subscriptions.push(refresh);



}

// This method is called when your extension is deactivated
export function deactivate() {}
