// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(ctx: vscode.ExtensionContext) {
  // create a new status bar item that we can now manage
  const barItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, -Infinity)
  barItem.command = 'workbench.action.togglePanel'
  barItem.text = '$(layout-panel) Panel'
  barItem.show()
  ctx.subscriptions.push(barItem)
}

// This method is called when your extension is deactivated
export function deactivate() {}
