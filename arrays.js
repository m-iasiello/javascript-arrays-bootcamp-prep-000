// chocolate Array
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


//add element
function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array]
  return newArray
}

//destructively
function destructivelyAddElementToBeginningOfArray(array, element) {
  var newArray = array.unshift(element)
  return newArray
}