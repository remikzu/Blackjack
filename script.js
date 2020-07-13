let myFunction = function loggingFunction() {
    console.log('Here is a message')
};

myFunction();

function showMessage(message) {
    console.log(message);
}

showMessage('jeden', 'dwa');

let myFunction2 = function (message, firstName) {
    console.log(message);
    console.log(firstName);
}

myFunction2('Hello', 'Remik');

let key = 42;

function getSecretCode(value) {

    let keyGenerator = function () {
        let key = 12;
        console.log('in keyGenerator: ', key);
    }

    let code = value * keyGenerator();
    console.log('in getSecretCode: ', key);
    return code;
}

changePercentOff(30);

showMessage(getSecretCode(3));

/*
 Anything...  
 Comment...
 */