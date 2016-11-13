'use strict';
module.exports = function() {
  var randomNumber = Math.random()*1000000;
  var myNum = function (){
    return randomNumber;
  };
  return myNum;
};



//   var secretNumber = (function (){

//       var secretNumberGenerator = function(min, max) {
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         var secretNumber = (Math.floor(Math.random()*(max - min + 1)) + min);
//         console.log(secretNumber);
//         return secretNumberGenerator;
//         return Math.floor(Math.random()*(max - min + 1)) + min;
//       };
//     return secretNumberGenerator;
//   })();
// };

// var secretNumber = secretNumberGenerator();
// var test1 = secretNumber();
// console.log (secretNumber());
// // console.log(secretNumber());