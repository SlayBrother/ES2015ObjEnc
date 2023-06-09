// function makePerson(first,last,age){
// return {
//     first: first,
//     last: last,
//     age: age, 
//     isAlive: true
//     }
// }

function makePerson(first,last,age){
return {
    first,
    last,
    age, 
    isAlive: true
    }
}

// const mathStuff = {
//     x : 200, 
//     add : function(a,b){
//         return a + b;
//     },
//     square: function (a){
//         return a * a
//     }
// }

const mathStuff = {
    x : 200, 
    add(a,b) {
        return a + b;
    },
    square(a){
        return a * a
    }
}

// function makeColor(name,hex) {
//     const color = {}; 
//     color [name] = hex; 
//     color [hex] =  name
//     return color
// }

function makeColor(name,hex) {
    return {
        [name] : hex,
        [hex] : name,
    };
}

