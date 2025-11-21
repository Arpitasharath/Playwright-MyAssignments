
//Declare a global variable and shadow it inside a function using "var" to see how they behave 

const browserVersion = "Chrome"; // global variable

function getBrowserVersion(browserVersion) {
    if (browserVersion === "Chrome") {
        var browserVersion = "Chrome - Version 120"; //Var as a shadow o/p :undefined

        console.log("Inside Function -Var:", browserVersion);
    }

    console.log("Outside Block-Var :", browserVersion); // still prints local value
}

getBrowserVersion("Chrome");

//Declare a global variable and shadow it inside a function using "let" to see how they behave 


const browserVer = "Chrome"; // global variable
function getBrowserVer(browserVer) {
    if (browserVer === "Chrome") {

        let browserVer = "Chrome - Version 120";  // let as a shadows o/p : inside-chrome-version 120 and outside:chorme
        console.log("Inside Function-Let :", browserVer);
    }

    console.log("Outside Block-Let :", browserVer); // still prints local value
}

getBrowserVer("Chrome");

