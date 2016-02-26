function onlyEven (array) {
  return array.filter(function(elem){
    return elem%2 === 0;
  })
};

function onlyOneWord (array) {
  return array.filter(function(elem){
    return !elem.includes(" ")
  })
};

function posxitiveRowsOnly (array) {
  return array.filter(function(elem){
    elem.filter
  })
};

function allSameVowels (array) {
  // your code here
};

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  posxitiveRowsOnly: posxitiveRowsOnly,
  allSameVowels: allSameVowels
};
