// アプリケーション作成用のモジュールを読み込み
const { app, BrowserWindow } = require('electron');

// メインウィンドウ
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ witdh: 800, height: 600 });
  // メインウィンドウに表示するURLを指定します
  mainWindow.loadFile('index.html');
  // デベロッパーツールの起動
  mainWindow.webContents.openDevTools();
  // メインウィンドウが閉じられたときの処理
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

//  初期化が完了した時の処理
app.on('ready', createWindow);

// 全てのウィンドウが閉じたとき
// macOSのとき以外はアプリケーションを終了させます
app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// アプリケーションがアクティブになった時の処理
// メインウィンドウが消えている場合は再度メインウィンドウを作成する
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});