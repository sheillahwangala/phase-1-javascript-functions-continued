// code your solution here
function saturdayFun (games = 'roller-skate') {
    return (`This Saturday, I want to ${games}!`);
}
saturdayFun ('bathe my dog')

let mondayWork = function (dayActivity = 'go to the office') {
    return(`This Monday, I will ${dayActivity}.`);
}
mondayWork('work from home')

function wrapAdjective (timesOperator = '*') {
    return function (sign = 'special') {
        return (`You are ${timesOperator}${sign}${timesOperator}!`);
    }
}
wrapAdjective()()