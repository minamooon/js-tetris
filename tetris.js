var COLS = 10, ROWS = 20;//マス目の指定。横10,縦20
var board = [];//盤面情報
var lose; //上まで行っちゃっているかの情報
var interbal;//ゲームを実行するタイマーを保持する変数
var current;//今操作しているブロックの形
var currentX, currentY; //今操作しているブロックの位置

//操作するブロックパターン
var shapes = [
  [1, 1, 1, 1],
  [1, 1, 1, 0,
     1],
  [1, 1, 1, 0,
  0, 0, 1],
  [1, 1, 0, 0,
  1, 1],
  [1, 1, 0, 0,
  0, 1, 1],
  [0, 1, 1, 0,
  1, 1],
  [0, 1, 0, 0,
  1, 1, 1]
];

var colors = [
  'cyan', 'orange', 'blue', 'yellow', 'red', 'green', 'purple'
];

//盤面を空に
function init(){
  for (var y = 0; y < ROWS; y++){
    board[y] = [];
    for (var x = 0; x < COLS; x++) {
      board[y][x] = 0;
    }
  }
}



//一番最後に描画。一番はじめの読み込み、ゲームオーバー時にnewGame関数は呼び出されます。
function newGame() {
  clearInterval(interval); //ゲームタイマークリア
  init();//盤面をまっさらに
  newShape();//操作ブロックをセット
  lose = false; //負けフラッグ
  interval = setInterval( tick, 250);//250ミリ秒ごとにtickという関数を呼び出す
}
newGame();
