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
    let ageYearNum = new Number(year.value);
    let ageYear = currYear - ageYearNum.valueOf();

    let ageDayNum = new Number(day.value);
    let ageDay = currDay - ageDayNum.valueOf();

    let ageMonthNum = new Number(month.value);
    let ageMonth = currMonth - ageMonthNum.valueOf();

    ageSummary = `You are ${ageYear} years, ${ageMonth} months and ${ageDay} days old`

    if (ageDay < 0) {
        ageMonth--;
        ageDay = currDay + ageDayNum.valueOf()
    }

    if (ageMonth < 0) {
        ageYear--;
        ageMonth = 12 + ageMonth;
    }

    if (ageYear < currYear) {
        ageSummary = `Your age year cannot be greater than current year`

    }

    infoText.innerText = ageSummary;
})