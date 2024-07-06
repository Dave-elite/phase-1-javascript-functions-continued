// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}
console.log(saturdayFun());
console.log(saturdayFun('go to the beach'));

function mondayWork(activity = 'go to the office'){
 return `This Monday, I will ${activity}.`
}
console.log(mondayWork())

// function outer(greeting,msg = "It's a fine day to learn"){
//     const innerFunction = function (name, lang = "python"){
//         return `${greeting}, ${name}! ${msg} ${lang}`;
//     };
//     return innerFunction("student", "JavaScript")
// }
function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}

const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("amazing")); 
console.log(encouragingPromptFunction()); 
