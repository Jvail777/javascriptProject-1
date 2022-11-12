//Selectors
let billsInput = document.querySelector("#billsInput");
let foodInput = document.querySelector("#foodInput");
let clothingInput = document.querySelector("#clothingInput");
let entertainmentInput = document.querySelector("#entertainmentInput");
let billAdd = document.querySelector("#billForm");
let foodAdd = document.querySelector("#foodForm");
let clothingAdd = document.querySelector("#clothingForm");
let entertainmentAdd = document.querySelector("#entertainmentForm");
let formBudget = document.querySelector("#maxBudget");

//Variables
let billsExpenses = 0;
let foodExpenses = 0;
let clothingExpenses = 0;
let entertainmentExpenses = 0;
let startBudget = 0;
let remainingBudget = 0;

//Listeners
billAdd.addEventListener("submit", bills);
foodAdd.addEventListener("submit", food);
clothingAdd.addEventListener("submit", clothing);
entertainmentAdd.addEventListener("submit", entertainment);
formBudget.addEventListener("submit", setStartingBudget);
formBudget.addEventListener("submit", setRemainingBudget);

//Budget Functions
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

  remainingBudget += budgetInput;

  document.getElementById(
    "remaining"
  ).innerText = `Remaining Budget: $${budgetInput}`;
}

//Other Functions
function bills(event) {
  event.preventDefault();

  //add variable to store input value
  let expenseName = billName.value;
  let expenseAmount = parseFloat(billsInput.value);
  let expense = {
    name: expenseName,
    amount: expenseAmount,
  };

  //create new element for the expense to display
  let newExpense = document.createElement("p");
  newExpense.innerText = `${expense.name}: $${expense.amount.toFixed(2)}`;
  categoryBills.append(newExpense);

  let billInput = expense.amount;

  billsExpenses += billInput;

  document.getElementById("billsTotal").innerText = `$${billsExpenses}`;

  let remainingBudgets = billInput;

  remainingBudget -= remainingBudgets;

  document.getElementById(
    "remaining"
  ).innerText = `Remaining Budget: $${remainingBudget}`;

  if (remainingBudget < 0) {
    alert("Your Remaining budget is in the negative!");
  } else if (remainingBudget === 0) {
    alert("You are now at 0. You cannot add anything else!");
  }
}

function food(event) {
  event.preventDefault();

  //add variable to store input value
  let expenseName = foodName.value;
  let expenseAmount = parseFloat(foodInput.value);
  let expense = {
    name: expenseName,
    amount: expenseAmount,
  };

  //create new element for the expense to display
  let newExpense = document.createElement("p");
  newExpense.innerText = `${expense.name}: $${expense.amount.toFixed(2)}`;
  categoryFood.append(newExpense);

  let foodsInput = expense.amount;

  foodExpenses += foodsInput;

  document.getElementById("foodTotal").innerText = `$${foodExpenses}`;

  let remainingBudgets = foodsInput;

  remainingBudget -= remainingBudgets;

  document.getElementById(
    "remaining"
  ).innerText = `Remaining Budget: $${remainingBudget}`;

  if (remainingBudget < 0) {
    alert("Your Remaining budget is in the negative!");
  } else if (remainingBudget === 0) {
    alert("You are now at 0. You cannot add anything else!");
  }
}

function clothing(event) {
  event.preventDefault();

  //add variable to store input value
  let expenseName = clothingName.value;
  let expenseAmount = parseFloat(clothingInput.value);
  let expense = {
    name: expenseName,
    amount: expenseAmount,
  };

  //create new element for the expense to display
  let newExpense = document.createElement("p");
  newExpense.innerText = `${expense.name}: $${expense.amount.toFixed(2)}`;
  categoryClothing.append(newExpense);

  let clothingsInput = expense.amount;

  clothingExpenses += clothingsInput;

  document.getElementById("clothingTotal").innerText = `$${clothingExpenses}`;

  let remainingBudgets = clothingsInput;

  remainingBudget -= remainingBudgets;

  document.getElementById(
    "remaining"
  ).innerText = `Remaining Budget: $${remainingBudget}`;

  if (remainingBudget < 0) {
    alert("Your Remaining budget is in the negative!");
  } else if (remainingBudget === 0) {
    alert("You are now at 0. You cannot add anything else!");
  }
}

function entertainment(event) {
  event.preventDefault();

  //add variable to store input value
  let expenseName = entertainmentName.value;
  let expenseAmount = parseFloat(entertainmentInput.value);
  let expense = {
    name: expenseName,
    amount: expenseAmount,
  };

  //create new element for the expense to display
  let newExpense = document.createElement("p");
  newExpense.innerText = `${expense.name}: $${expense.amount.toFixed(2)}`;
  categoryEntertainment.append(newExpense);

  let entertainmentsInput = expense.amount;

  entertainmentExpenses += entertainmentsInput;

  document.getElementById(
    "entertainmentTotal"
  ).innerText = `$${entertainmentExpenses}`;

  let remainingBudgets = entertainmentsInput;

  remainingBudget -= remainingBudgets;

  document.getElementById(
    "remaining"
  ).innerText = `Remaining Budget: $${remainingBudget}`;

  if (remainingBudget < 0) {
    alert("Your Remaining budget is in the negative!");
  } else if (remainingBudget === 0) {
    alert("You are now at 0. You cannot add anything else!");
  }
}
