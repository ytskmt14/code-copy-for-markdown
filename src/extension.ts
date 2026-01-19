import * as vscode from 'vscode';

/**
 * 言語IDをマークダウンコードブロックの言語名に変換
 */
function getLanguageForMarkdown(languageId: string): string {
  // 一般的な言語IDのマッピング
  const languageMap: { [key: string]: string } = {
    'javascript': 'javascript',
    'typescript': 'typescript',
    'javascriptreact': 'jsx',
    'typescriptreact': 'tsx',
    'python': 'python',
    'java': 'java',
    'c': 'c',
    'cpp': 'cpp',
    'csharp': 'csharp',
    'go': 'go',
    'rust': 'rust',
    'ruby': 'ruby',
    'php': 'php',
    'swift': 'swift',
    'kotlin': 'kotlin',
    'scala': 'scala',
    'html': 'html',
    'css': 'css',
    'scss': 'scss',
    'sass': 'sass',
    'less': 'less',
    'json': 'json',
    'xml': 'xml',
    'yaml': 'yaml',
    'yml': 'yaml',
    'markdown': 'markdown',
    'sql': 'sql',
    'shellscript': 'bash',
    'bash': 'bash',
    'powershell': 'powershell',
    'dockerfile': 'dockerfile',
    'plaintext': 'text',
    'text': 'text'
  };

  return languageMap[languageId.toLowerCase()] || languageId;
}

/**
 * 選択されたコードをマークダウン形式でクリップボードにコピー
 */
export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    'codeCopyForMarkdown.copyAsMarkdown',
    () => {
      const editor = vscode.window.activeTextEditor;
      
      if (!editor) {
        vscode.window.showWarningMessage('アクティブなエディタがありません');
        return;
      }

      const selection = editor.selection;
      const selectedText = editor.document.getText(selection);

      if (!selectedText) {
        vscode.window.showWarningMessage('コードが選択されていません');
        return;
      }

      // 現在のファイルの言語IDを取得
      const languageId = editor.document.languageId;
      const markdownLanguage = getLanguageForMarkdown(languageId);

      // マークダウン形式に変換
      const markdownCode = `\`\`\`${markdownLanguage}\n${selectedText}\n\`\`\``;

      // クリップボードにコピー
      vscode.env.clipboard.writeText(markdownCode).then(() => {
        vscode.window.showInformationMessage(
          `マークダウン形式でコピーしました (${markdownLanguage})`
        );
      }, (error) => {
        vscode.window.showErrorMessage(`コピーに失敗しました: ${error}`);
      });
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
