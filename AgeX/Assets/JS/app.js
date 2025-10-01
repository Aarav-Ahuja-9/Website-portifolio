let month = document.querySelector("#input-month")
let day = document.querySelector("#input-day")
let year = document.querySelector("#input-year")
let checkBtn = document.querySelector(".verify-button")
let infoText = document.querySelector(".information-text")


let date = new Date();
let currDay = date.getDate();
let currMonth = date.getMonth() + 1;
let currYear = date.getFullYear();

checkBtn.addEventListener('click', () => {


    let ageYearNum = new Number(year.value).toFixed(0);
    let ageYear = currYear - ageYearNum.valueOf();

    let ageDayNum = new Number(day.value).toFixed(0);
    let ageDay = currDay - ageDayNum.valueOf();

    let ageMonthNum = new Number(month.value).toFixed(0);
    let ageMonth = currMonth - ageMonthNum.valueOf();


    infoText.innerText = `You are ${ageYear} years, ${ageMonth} months and ${ageDay} days old`;
})