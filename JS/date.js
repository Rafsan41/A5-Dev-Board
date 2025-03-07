





const date = new Date()
const weekName = {
    weekday: "long"
}
const DateCount = {
    year: "numeric",
    month: "short",
    day: "numeric",
}
let currentWeek = document.getElementById('currentWeek')
let currentDate = document.getElementById('currentDate')
let stringweek = date.toLocaleDateString("en-US", weekName)
let stringdateCount = date.toLocaleDateString("en-US", DateCount)

console.log(stringweek, stringdateCount)
currentWeek.innerText = stringweek;

currentDate.innerText = stringdateCount;

