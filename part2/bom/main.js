console.log("Hello from part 2!");
console.log("Browser Object Model");
// BOM is a set of APIs that allow JavaScript to interact with the browser and access browser features like windows, documents, tabs, and cookies...

// 'window' proerties
console.log("Window Height:", window.innerHeight);
console.log("Window Width:", window.innerWidth);
console.log("Window Location:", window.location);
// location is an object that contains information about the current URL of the page
console.log("Window Location hostname:", location.hostname);
console.log("Window Location host:", location.host);
console.log("Window Location port:", location.port);
console.log("Window Location search:", location.search);

// 'window' methods
//alert("Hello World!");
//const confirmed = window.confirm("Are you sure?");
//console.log("Confirmed:", confirmed);
//const userInput = window.prompt("Enter your name:", "Enter your name here");
//console.log("User Input:", userInput);


//'navigator'
console.log("UserAgent:", navigator.userAgent);
console.log("Online:", navigator.onLine);
if( navigator.userAgentData){
    console.log("Brands:", navigator.userAgentData.brands);
    console.log("Mobile:", navigator.userAgentData.mobile);
}

// 'history' object represent the browser's session history
//console.log("History:", history);
//history.back();
//history.forward();
//history.go(1);
//history.go(-1);


