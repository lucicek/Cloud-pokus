/*
const fs = require("fs"); 

// Read users.json file 
fs.readFile('./JSON/data.json', function(err, data) { 
    
    // Check for errors 
    if (err) throw err; 

    // Converting to JSON 
    const users = JSON.parse(data); 
    console.log(users); // Print users 
});
*/


 ///////////////////////
///////////////////////

const fs = require("fs");

// STEP 1: Reading JSON file 
const users = require("./JSON/data.json");

// STEP 2: Adding new data to users object 
users[0].soteziciA = false

// STEP 3: Writing to a file 
fs.writeFile(
    './JSON/data.json',
    JSON.stringify(users),
    err => {
        // Checking for errors 
        if (err) throw err;

        // Success 
        console.log("Done writing");
    });