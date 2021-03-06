/** 

Why pay a fortune teller when you can just program your fortune yourself? Write a function named tellFortune() that:
Takes 4 arguments: number of children, partner's name, geographic location, job title.
Outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.

**/ 

function tellFortune(numberOfChildren, parnersName, geographicLocation, jobTitle) {
    return `You will be a ${jobTitle} in ${geographicLocation}, and married to ${parnersName} with ${numberOfChildren} kids.`
}

for (let index = 0; index < 3; index++) {    
    let numberOfChildren = window.prompt("Number of children");
    let parnersName = window.prompt("Partner's name");
    let geographicLocation = window.prompt("Geographic Location");
    let jobTitle = window.prompt("Job title");

    console.log(tellFortune(numberOfChildren, parnersName, geographicLocation, jobTitle));    
}
