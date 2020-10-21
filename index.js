function danishLog(string){
    var reset = "\x1b[0m",
    colors = ["\x1b[31m", "\x1b[37m"]
    output = "";
    for(let i=0; i<string.length; i++){
        output += colors[i % colors.length] + string[i] + reset;
    }
    console.log(output);
}
module.exports = danishLog;