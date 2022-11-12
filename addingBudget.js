//Selectors
let formBudget = document.querySelector("#maxBudget");
//Variables
let startBudget = 0;
let remainingBudget = 0;
//Listeners
formBudget.addEventListener("submit", setStartingBudget);
formBudget.addEventListener("submit", setRemainingBudget);

function setStartingBudget(event) {
  event.preventDefault();
  let input = document.querySelector("#number");
  let budgetInput = Number(input.value);

  let startingBudget = budgetInput;

  startBudget += startingBudget;

  document.getElementById(
    "start"
  ).innerText = `Starting Budget: $${budgetInput}`;
}

function setRemainingBudget(event) {
  event.preventDefault();
  let input = document.querySelector("#number");
  let budgetInput = Number(input.value);

  document.getElementById(
    "remaining"
  ).innerText = `Remaining Budget: $${budgetInput}`;

  let remainingBudgets = budgetInput;

  remainingBudget -= remainingBudgets;
}
