//Note: Functions are objects

var onTheMoon = true;

// Anomynous function has a name to call function inside
// Functions are object
var thingsToDoToday = function flyToTheMoon() {
    if(!onTheMoon)
        flyToTheMoon();
    else
        console.log('One small ...');
};

thingsToDoToday();


//Function operator is useful because it's an expression
var toDoToday = [
    //Anomynous function
    function() {
        console.log("First works to do")
    },

    //Anomynous function
    function() {
        console.log("Second works to do");
    },

];

for (var x=0; x<toDoToday.length; x++){
    toDoToday[x]();
}



//Anomynous inside loop
for (var i = 0; i <= 20;i++){
    var myFunction = function(){
        console.log('Now, Number is: '+ i);
    };
    myFunction();
}

