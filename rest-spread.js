// Original func
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }
// Version ES2015
const OddsFilter  = (...nums) => {return nums.filter((num) =>  {return num % 2 === 0})}

// findMin 
const findMin = (...nums) => {return nums.reduce((acc, next) => {
    if(next < acc){
        return next;
    }
    return acc
})};

// MergeObjects
const mergeObjects = (obj1, obj2) => {return {...obj1, ...obj2}}

// doubleAndReturnArgs
const dblAndReturn = (...args) => {return args.forEach((arg) => {return arg * 2})}






//  SLICE AND DICE 

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (...items) => {
    // GENERATE RANDOM NUMBER BETWEEN 0 AND ARR.LENGTH
    let randIdx = Math.floor(Math.random() * items.length)
    // SLICE RANDOM NUM AND RETURN
    return [...items.slice(0, randIdx), ...items.slice(randIdx + 1)]};

/** Return a new array with every item in array1 and array2. */

function xtend(array1, array2) {}

const extend = (array1, array2) => {return [...array1, ...array2]};

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function KeyVal(obj, key, val) {}

const addKeyVal = (obj, key, val) => {
    // CREATE NEW SPREADED OBJ
    let newObj = { ...obj }
    // MATCH KEY TO VALUE IN NEW OBJ
    newObj[key] = val;
    return newObj;
}



/** Return a new object with a key removed. */

function removeKey(obj, key) {}

const removeKey = (obj, key) => {
    // CREATE NEW SPREADED OBJ
    let newObj = { ...obj }
    // DELETE KEY IN OBJ AND RETURN
  delete newObj[key]
  return newObj
}

/** Combine two objects and return a new object. */

function combine(obj1, obj2) {}

const combineObj = (obj1, obj2) => {return [...obj1, ...obj2]}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {}

const updateObj = (obj, key, val) => {
    // CREATE NEW SPREADED OBJ
    let newObj = {...obj}
    // MATCH KEY TO VALUE THEN RETURN
    newObj[key] = val;
    return newObj;
}