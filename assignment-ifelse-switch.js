/*Create two functions : launchBrowser, runTests where,
 a) launchBrowser need to take input as browserName (string) and do not return any
 - use if-else (chrome or otherwise)
 - Print the value
 b) runTests need to take input as testType (string) and do not return any 
 - use switch case (smoke, sanity, regression, default (smoke))
 - Print the values
Call that function from the javascript*/

// Function 1: launchBrowser
function launchBrowser(browserName) {

    if (browserName === "edge") {
        console.log("Launching edge Browser...");
    } else {
        console.log("Launching Default Browser...");
    }
}
// Calling the functions
launchBrowser("edge");

// Function 2: runTests
function runTests(testType) {

    switch (testType) {
        case "smoke":
            console.log("Running Smoke Tests...");
            break;

        case "sanity":
            console.log("Running Sanity Tests...");
            break;

        case "regression":
            console.log("Running Regression Tests...");
            break;

        default:
            console.log("Running Smoke Tests (Default)...");
            break;
    }
}

// Calling the functions
runTests("regression");
