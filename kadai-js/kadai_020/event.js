// ボタンとメッセージ要素を取得
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンがクリックされたときに実行される関数
btn.addEventListener('click', () => {
  // メッセージの内容を変更
  text.textContent = 'ボタンをクリックしました';
  console.log(text);
});
