// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const path = require('path');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "pythondebugtools" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	// const disposable = vscode.commands.registerCommand('pythondebugtools.helloWorld', function () {
	// 	// The code you place here will be executed every time your command is executed

	// 	// Display a message box to the user
	// 	vscode.window.showInformationMessage('Hello World from PythonDebugTools!');
	// });

	const disposable = vscode.commands.registerCommand('pythondebugtools.genModulePath', function () {
		// The code you place here will be executed every time your command is executed
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			const workspaceFolders = vscode.workspace.workspaceFolders;
            if (!workspaceFolders) {
                return;
            }

			const workspaceRoot = workspaceFolders[0].uri.fsPath; // 获取工作区根路径
            const filePath = editor.document.fileName; // 获取当前文件的绝对路径

            // 计算相对路径
            let relativePath = path.relative(workspaceRoot, filePath);
			// 去掉扩展名
            relativePath = relativePath.replace(path.extname(relativePath), '');
            // 替换 `\` 为 `.`
            relativePath = relativePath.replace('/', '.');

            // vscode.window.showInformationMessage(`相对路径: ${relativePath}`);
            return relativePath; // 返回值
		}
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
