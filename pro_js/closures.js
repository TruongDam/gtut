/*
 desc Use closures when
 */

function sayHello (name) {
    var privateVar = 'privateVar';
    var privateMethod = function () {
        console.log(name);
    };

    return privateMethod;
}


var talk = sayHello("hello");
talk()