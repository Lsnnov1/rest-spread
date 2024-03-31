function sumUp(){
    const args = Array.from(arguments);
   return args.reduce((acc, next) => {
        return acc + next;
    }); 
}
sum(3,45,83)

// old way
function max() {
    const args = Array.from(arguments);
    return args.reduce((acc, next) => {
        if(next > acc) {
            return next
        }
        return acc
    }, 0)
}

// rest operator
function sum(...nums){
   return nums.reduce((acc, next) =>  next + acc);
}

function makeFamily(p1, p2, ...kids){
    return {
        parents : [p1, p2],
        kids : kids.length ? kids : 0
    };

}

const filterByType = (type , ...val) => {
   return val.filter((v) => typeof v === type)
};

// spread operator
const numbers = [1, 34, 67, 78, 45, 36]

// returns NaN 
console.log(Math.max(numbers))


console.log(Math.max(...numbers))

// creating copies with spread

const numbs = [1, 34, 67, 78, 5, 36]
const newNumbs = [777, ...numbs, 999 ]

console.log(newNumbs)

// spread objects
const tea = {
    type: "oolong",
    name: "winter spout",
    origin: "taiwan"
}
// will not work 
doFunc(...tea)
// tea is an object and not iterable into arrays
// do instead

tea2 = {...tea}
doFunc(tea2)


