//turn printing time into function
function printTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
// initial call when executed
printTime();

// Use setInterval to call printTime every second
let interval = setInterval(printTime, 1000);

// Use setTimeout and clearinterval to stop printing after 20 seconds
setTimeout(function() {clearInterval(interval); console.log("Stoped after 20 seconds"); }, 20000);