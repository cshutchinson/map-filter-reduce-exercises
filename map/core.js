function multiplyBy10 (array) {
  return array.map(function(elem){
    return elem*10;
  })
};

function shiftRight (array) {
 return array.map(function(elem, index, array){
   if(index===0){
     return array[array.length-1]
   }else {
     return array[index-1]
   }
 })
};

function onlyVowels (array) {
  return array.map(function(elem,index,array){
    return elem.replace(/[^aeiou]/gi, '');
  })
};

function doubleMatrix (array) {
 // your code here
};

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
