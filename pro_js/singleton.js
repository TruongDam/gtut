//Use singleton pattern,  The singleton is the blobal access to the instance as we don't call new MySingleton() directly.
var mySingleton = (function () {
    var instance;
    function init() {
        //Singleton
        var privateVariable = 'private variable';

        function privateMethod() {
            console.log('Console log the private method');
        }
        var privateRandomNumber = Math.random();


        return {
            publicMethod: function() {
                console.log(' Console log the public method');
            },

            publicProperty: 'public property',

            getRandonValues:  function () {
                return privateRandomNumber;
            }
        }
    }
    
    

    return {
        getInstance : function() {
            if (!instance){
                instance = init();
            }

            return instance;
        }
    }
})();




//Usage
var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
var signgleC = mySingleton.getInstance();
console.log(singleB.getRandonValues() == singleA.getRandonValues());
console.log(singleA.getRandonValues() == singleB.getRandonValues());

// singleA, singleB, singleC is only a instance of mySingleton ( link to a address memory)