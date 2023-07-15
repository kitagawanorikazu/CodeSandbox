// var val1 = "var変数３";
// console.log(val1);

// const val4 = {
//   name: "kita",
//   age: 57,
// };
// console.log(val4);
// val4.age = 60;
// val4.address = "tokyo";
// console.log(val4);

// const val5 = ["dog", "cat"];
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "kita";
// const age = 57;
// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);
// // テンプレート文字列
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1"));

// // アロー関数
// const func2 = (str) => str;
// console.log(func2("func2"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(1, 2));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "kita",
//   age: 57,
// };
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);
// const myProfile = ["kita", "57"];
// const [name, age] = myProfile;
// const message3 = `名前は${name}です。年齢は${age}です。`;
// console.log(message3);

/**
 * デフォルト値
 */
// const sayHello = (name = "default") => console.log(`こんにちは！${name}`);
// sayHello();

/**
 * スプレッド構文 ...
 */
// 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => {
//   console.log(num1 + num2);
// };
// // sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...num3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(num3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// arr4[0] = 100;
// console.log(arr8);

/**
 * map&filterを使った配列の処理
 */
const nameArr = ["田中", "山田", "北川"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name)=>{
//     return name;
// })

//nameArr.map((name, index) => console.log(`${index + 1}は${name}`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "北川") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 > 0 ? "true" : "false";
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// };
// console.log(checkSum(50, 50));

/**
 * 論理演算子の本当の意味を知ろう && ||
 */
// const flag1 = true;
// const flag2 = true;

// if (flag1 && flag2) {
//   console.log("1も2もtrue");
// }

// || は、左側がfalseなら右側を返す
const num = 100;
const fee = num || "金額未設定です";
console.log(fee);

// && は、左側がtrueなら右側を返す
const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
