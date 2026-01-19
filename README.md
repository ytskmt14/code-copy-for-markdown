# Code Copy for Markdown

VSCode/Cursorでコードをマークダウン形式でコピーする拡張機能です。

[![GitHub](https://img.shields.io/badge/GitHub-ytskmt14%2Fcode--copy--for--markdown-blue)](https://github.com/ytskmt14/code-copy-for-markdown)

## 機能

- 選択したコードをマークダウン形式（```で囲む）でクリップボードにコピー
- シンタックスハイライトが効くように言語名を自動検出

## インストール

### GitHub Releasesからインストール

1. [Releases](https://github.com/ytskmt14/code-copy-for-markdown/releases) ページにアクセス
2. 最新のリリースから `.vsix` ファイルをダウンロード
3. VSCode/Cursorで以下のいずれかの方法でインストール：
   - **GUI**: `Cmd+Shift+P` (Mac) / `Ctrl+Shift+P` (Windows/Linux) → 「Extensions: Install from VSIX...」を選択 → ダウンロードした `.vsix` ファイルを選択
   - **コマンドライン**: 
     ```bash
     # VSCodeの場合
     code --install-extension code-copy-for-markdown-*.vsix
     
     # Cursorの場合
     cursor --install-extension code-copy-for-markdown-*.vsix
     ```

## 使い方

1. コードを選択
2. 以下のいずれかの方法でコピー：
   - コマンドパレット（`Cmd+Shift+P` / `Ctrl+Shift+P`）から「Copy as Markdown」を実行
   - ショートカットキー（`Cmd+Shift+C` / `Ctrl+Shift+C`）を使用

## 開発

### セットアップ

```bash
npm install
```

### ビルド

```bash
npm run compile
```

### デバッグ

#### 方法1: 拡張機能開発ホストを使用（F5）

1. VSCodeでこのフォルダを開く
2. `F5`キーを押して拡張機能開発ホストを起動
3. 新しいウィンドウで拡張機能をテスト

#### 方法2: パッケージ化してインストール（推奨）

この方法では、通常のVSCode/Cursorに拡張機能をインストールして使用できます。

```bash
# vsceをインストール（初回のみ）
npm install -g @vscode/vsce

# パッケージ化（.vsixファイルを作成）
npm run package

# 手動でインストール
# VSCode/Cursorで: Cmd+Shift+P (Mac) / Ctrl+Shift+P (Windows/Linux)
# → "Extensions: Install from VSIX..." を選択
# → 作成された .vsix ファイルを選択
```

または、コマンドラインから直接インストール：

```bash
# パッケージ化（.vsixファイルを作成）
npm run install-local

# その後、コマンドラインからインストール
code --install-extension code-copy-for-markdown-0.0.1.vsix
# または Cursor の場合
cursor --install-extension code-copy-for-markdown-0.0.1.vsix
```

インストール後は、通常の拡張機能として使用できます。

## リリース方法

この拡張機能はGitHub Releasesから配布されます。

### 手動リリース

1. **package.jsonのバージョンを更新**
   ```json
   "version": "0.0.2"  // セマンティックバージョニングに従って更新
   ```

2. **変更をコミット・プッシュ**
   ```bash
   git add package.json
   git commit -m "Bump version to 0.0.2"
   git push
   ```

3. **GitHubでリリースを作成**
   - GitHubリポジトリの「Releases」ページにアクセス
   - 「Draft a new release」をクリック
   - タグ名: `v0.0.2`（バージョンに合わせて）
   - タイトル: `v0.0.2` または適切なリリース名
   - 説明: 変更内容を記載
   - 「Publish release」をクリック

4. **GitHub Actionsが自動でビルド・アップロード**
   - `.github/workflows/release.yml` が自動実行されます
   - `.vsix` ファイルがリリースに自動アップロードされます

### ローカルでビルドして手動アップロード

GitHub Actionsを使わずに手動でビルドする場合：

```bash
# 依存関係のインストール
npm install

# TypeScriptのコンパイル
npm run compile

# vsceをインストール（初回のみ）
npm install -g @vscode/vsce

# パッケージ化
npm run package

# GitHub Releasesに .vsix ファイルを手動でアップロード
```

### その他の配布方法（オプション）

#### VSCode Marketplaceに公開

VSCodeの拡張機能検索から見つけられるようにする場合：

1. **Microsoftアカウントでログイン**
   - https://marketplace.visualstudio.com/manage にアクセス

2. **Personal Access Token (PAT) を作成**
   - https://dev.azure.com にアクセス
   - User Settings → Personal Access Tokens
   - スコープ: `Marketplace (Manage)` を選択

3. **公開**
   ```bash
   vsce login <your-publisher-name>
   vsce publish
   ```

#### Open VSX Registryに公開

オープンソース向けのマーケットプレイスです。

```bash
npm install -g ovsx
ovsx publish
```

詳細: https://open-vsx.org/

## ライセンス

MIT
