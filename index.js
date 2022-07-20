const leapYearChecker = n =>
    n > 0 ?
    ((n % 4 === 0)?
    ((n%400 ===0)?"Leap year.":((n%100 === 0)?"Not a leap year.":"Leap year.")):
    "Not a leap year."):
    "Error: Enter a positive number."

const form = document.querySelector("form");
const result = document.querySelector("#result");

form.addEventListener("submit", function(event) {
  let currentYear = Number(form.elements.year.value);
  let resultText = leapYearChecker(currentYear);
  result.innerHTML = resultText;
  result.style.visibility = "hidden";
  setTimeout(function() {
    result.style.visibility = "visible"
  }, 100);
  event.preventDefault();
});
