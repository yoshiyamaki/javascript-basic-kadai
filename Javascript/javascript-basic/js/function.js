const sayGoodMorning = () => {
  console.log('おはようございます！');
  console.log('昨日はよく眠れましたか？');
  console.log('今日も一日頑張りましょう！');
}

const sayGoodEvening = () => {
  console.log('こんばんは！');
  console.log('今日も一日お疲れさまでした。');
}

sayGoodMorning();

sayGoodEvening();

// 
const calculateTotal = (price) => {
  console.log(price + 500 + '円');
}

calculateTotal(1200);

// 
const addaTwoArguments = (price,shippingFee) => {
  console.log(price + shippingFee + '円');
}

addaTwoArguments(1200,500);

// 
const double = (num) => {
  return num * 2;
}

console.log(double(30));