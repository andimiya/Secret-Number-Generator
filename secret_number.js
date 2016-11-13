'use strict';

var secretNumberGenerator = function() {
  var randomNumber = Math.random()*1000000;
  var myNum = function (){
    return randomNumber;
  };
  return myNum;
};




var num1 = secretNumberGenerator();

// var num1 = function myNum() {
//   return randomNumber;
// };

num1(); //123

