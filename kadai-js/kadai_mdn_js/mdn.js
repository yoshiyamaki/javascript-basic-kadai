// 今日の日付を取得
const today = new Date();

// 各要素を取得
const year = today.getFullYear();
const month = today.getMonth() + 1; // 月は0から始まるので+1
const day = today.getDate();

// 日付をYYYY/MM/DD形式で表示
const formattedDate = `${year}年${month}月${day}日`;
console.log(formattedDate); // 例: 2024/11/04
