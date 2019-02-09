Electronのインストール
======

## 作成

npm init -y
※ここでルートに作成されるpackage.jsonはビルド用環境構築用

npm i -D electron

/src に作成
/src/main.js
/src/index.html

※このpackage.jsonはelectronの設定ファイル
src/package.json
{
  "main": "main.js",
}

## 起動する

npxをインストール
npm install -g npx

npx electron ./src

## パッケージング

パッケージャーをインストール
npm i -D electron-packager

Mac
npx electron-packager src FirstApp --platform=darwin --arch=x64 --overwrite

Win
npx electron-packager src FirstApp --platform=win32 --arch=x64 --overwrite

## npm scripts
"start": "electron ./src",

npm run start
npm run build-win
npm run build-mac