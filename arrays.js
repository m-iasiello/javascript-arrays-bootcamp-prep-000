// chocolate Array
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


//add element
function addElementToBeginningOfArray(array, element) {
  var newArray = [...element, array]
  return newArray
}

//destructively
function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element)
}