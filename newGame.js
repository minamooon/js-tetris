function newGame() {
  clearInterval(interval); //ゲームタイマークリア
  init();//盤面をまっさらに
  newShape();//操作ブロックをセット
  lose = false; //負けフラッグ
  interval = setInterval( tick, 250);//250ミリ秒ごとにtickという関数を呼び出す
}
newGame();
