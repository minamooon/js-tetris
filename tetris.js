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
  0, 0, 1]
]
