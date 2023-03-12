// #1
var myNum = 10;
console.log('myNum', myNum);

var myStr = 'строка';
console.log('myStr', myStr);

var myBool = true;
console.log('myBool', myBool);

var myArr = [1, 2, 3, 4, 5];
console.log('myArr', myArr);

var myObj = {first: 'First Name', last: 'Last Name'};
console.log('myObj', myObj);

// #2
var decimal2 = myNum.toFixed(2);
console.log('decimal2', decimal2);

// #3
var i = 10;
console.log('i', ++i);
console.log('i', --i);
console.log('i', i++);
console.log('i', i);
console.log('i', i--);
console.log('i', i);

// #4
var myTest = 20;

myTest += myNum;
console.log('myTest', myTest);

myTest -= myNum;
console.log('myTest', myTest);

myTest *= myNum;
console.log('myTest', myTest);

myTest /= myNum;
console.log('myTest', myTest);

myTest %= 2;
console.log('myTest', myTest);

// #5

var myPi = Math.PI;
console.log('myPi', myPi);

var myRound = Math.round(89.279);
console.log('myRound', myRound);

var myRandom = Math.random() * 10;
console.log('myRandom', myRandom);

var myPow = Math.pow(3,5);
console.log('myPow', myPow);

// #6
var strObj = {str: 'Мама мыла раму, рама мыла маму'};
strObj.length = strObj.str.length;
console.log('strObj', strObj);

// #7
var isRamaPos = strObj.str.indexOf ('рама');
console.log('isRamaPos', isRamaPos);

// #8
var strReplace = strObj.str.replace ('мыла','моет');
strReplace = strReplace.replace ('рама','Рама');
strReplace = strReplace.replace ('мыла','держит');
console.log('strReplace', strReplace);

// #9
console.log(strReplace.toUpperCase() );
console.log(strReplace.toLowerCase() );
