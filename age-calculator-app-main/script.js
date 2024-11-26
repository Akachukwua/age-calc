let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let spanDay = document.getElementById("spanDay");
let spanMonth = document.getElementById("spanMonth");
let spanYear = document.getElementById("spanYear");

function calculate() {
  let currentDate = new Date();
  let d = currentDate.getDate();
  let m = currentDate.getMonth() + 1;
  let y = currentDate.getFullYear();

  let inputDay = parseInt(day.value);
  let inputMonth = parseInt(month.value);
  let inputYear = parseInt(year.value);

  if (inputDay < 1 || inputDay > 31) {
    alert("Please enter a valid day between 1 and 31.");
    return;
  }
  if (inputMonth < 1 || inputMonth > 12) {
    alert("Please enter a valid month between 1 and 12.");
    return;
  }
  if (inputYear > y || (inputYear === y && inputMonth > m) || (inputYear === y && inputMonth === m && inputDay > d)) {
    alert("The entered date is in the future. Please enter a valid past date.");
    return;
  }

  let inputDate = new Date(inputYear, inputMonth - 1, inputDay);

  let realYear = y - inputDate.getFullYear();
  let realMonth = m - (inputDate.getMonth() + 1);
  let realDay = d - inputDate.getDate();

  if (realDay < 0) {
    realMonth--;
    realDay += new Date(y, m - 1, 0).getDate();
  }

  if (realMonth < 0) {
    realYear--;
    realMonth += 12;
  }

  spanDay.innerText = realDay;
  spanMonth.innerText = realMonth;
  spanYear.innerText = realYear;

  console.log(`${realDay} day(s), ${realMonth} month(s), ${realYear} year(s)`);
}
