

// Function Expression
var getMessage1 = function () {
    console.log('say message');
};


// Function declaration
function getMessage2 () {
    console.log('say message 2');
}

//IIFE Immediately-Invoked Function Expression
(function() {
    var privateVar = 'privateVar';
    
    function getMessage3() {
        console.log(privateVar);
    }

    getMessage3();

})();

// Error code because privateVar only see inside IIFE
console.log(privateVar);