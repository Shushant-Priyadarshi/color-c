import chalk from "chalk";

const colors ={
    danger:"red",
    warning:"yellow",
    info:"blue",
    success:"green",
    debug:"cyan",
    special:"magenta",
}

function log(message,property){
    const  color = colors[property] || "white";
    console.log(chalk[color](message.toUpperCase()))
}

export default log

