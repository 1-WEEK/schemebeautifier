"use strict";
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { LispFormatter } from "./lisp_formatter";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  const fileExtensions = [
    "lisp",
    "scheme",
    "rkt",
    "ss",
    "scm",
    "cl",
    "asd",
    "ros",
    "lsp",
    "el"
  ];

  fileExtensions.forEach(fileExtension => {
    const disposable = vscode.languages.registerDocumentFormattingEditProvider(
      fileExtension,
      new LispFormatter()
    );

    context.subscriptions.push(disposable);
  });
}

// this method is called when your extension is deactivate
export function deactivate() {}
