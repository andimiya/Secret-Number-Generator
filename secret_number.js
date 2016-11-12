'use strict';
module.exports = function() {



  var secretNumber = (function (){


      var secretNumberGenerator = function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        Math.floor(Math.random()*(max - min + 1)) + min;
    };


    return secretNumberGenerator;

    // secretNumberGenerator(0,100000);

  })();



// var secretNumber = secretNumberGenerator();
console.log (secretNumber());
// console.log(secretNumber());

};