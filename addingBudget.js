let formBudget = document.querySelector("#maxBudget");

formBudget.addEventListener("submit", setStartingBudget);
formBudget.addEventListener("submit", setRemainingBudget);

function setStartingBudget(event) {
  event.preventDefault();
  let input = document.querySelector("#number");
  let budgetInput = Number(input.value);

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
}
