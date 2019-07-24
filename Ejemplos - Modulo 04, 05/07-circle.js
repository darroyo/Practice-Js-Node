

//    Module 2: file 07-crcle.js with library of methods
//          -> exports methods in module.exports object

var _PI = Math.PI;                              // private module variable, not visible outside
                                                // convention: private names start usually with _

exports.area          = function (r) {  return _PI * r * r; };    // exported method
exports.circumference = function (r) {  return 2 * _PI * r; };    // exported method

