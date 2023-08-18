// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'

let statusBarItem: vscode.StatusBarItem

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(ctx: vscode.ExtensionContext) {
  console.log('111 panel-toggle')

  // create a new status bar item that we can now manage
  statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, -100)
  statusBarItem.command = 'workbench.action.togglePanel'
  statusBarItem.text = '$(layout-panel) Panel'
  statusBarItem.show()

  ctx.subscriptions.push(statusBarItem)
}

// This method is called when your extension is deactivated
export function deactivate() {}
