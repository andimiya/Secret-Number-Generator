'use strict';
// module.exports = function(){
var secretNumberGenerator = function() {
  var secretNumber = Math.random()*1000000;
  var secretNumberGenerator = function (){
    return secretNumber;
  };
  return secretNumberGenerator;
// };
};


// var num1 = secretNumberGenerator();


var num1 = secretNumberGenerator();

var num1 = function secretNumberGenerator() {

  return secretNumber;
};

// num1(); //123

