// declare a function
// insert a param
// return that param
function receivesAFunction(param) {
    return param();
}

// function returnsANamedFunction() {
//     return function test() {};
// }

function returnsANamedFunction() {
    function test() {};
    return test;
}

// declare returnsAnAnonymousFunction
// return an anonymous function

function returnsAnAnonymousFunction() {
    // return function() {}
    // arrow function syntax
    return () => console.log
}