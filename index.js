// Code your solution here
function findMatching(drivers, string){
    return drivers.filter(match =>
        match.toLowerCase() === string.toLowerCase()
    )
}

function fuzzyMatch(drivers, string){
    return drivers.filter(letter =>
        letter.toLowerCase().indexOf(string.toLowerCase()) === 0)
}

function matchName(drivers, string){
    return drivers.filter(driver =>
        driver.name === string 
    )
}