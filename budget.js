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
let reset = document.getElementById("reset");

//Variables
let billsExpenses = 0;
let foodExpenses = 0;
let clothingExpenses = 0;
let entertainmentExpenses = 0;
let startBudget = 0;
let remainingBudget = 0;
let totalSpent = 0;

//Listeners
billAdd.addEventListener("submit", bills);
foodAdd.addEventListener("submit", food);
clothingAdd.addEventListener("submit", clothing);
entertainmentAdd.addEventListener("submit", entertainment);
formBudget.addEventListener("submit", setStartingBudget);
formBudget.addEventListener("submit", setRemainingBudget);
formBudget.addEventListener("submit", toggleFormsDisabled(false));
reset.addEventListener("click", resetAll);
reset.addEventListener("click", clearInput);

toggleFormsDisabled(true);
//Budget Functions
function setStartingBudget(event) {
  event.preventDefault();
  let input = document.querySelector("#number");
  let budgetInput = Number(input.value);

  document.getElementById(
    "start"
  ).innerText = `Starting Budget: $${budgetInput}`;

  if (remainingBudget === 0) {
    toggleFormsDisabled(false);
  }
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
  newExpense.classList.add("remove");
  newExpense.appendChild;
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

  totalSpent += billInput;
  document.getElementById("spent").innerText = `Total Spent: $${totalSpent}`;

  if (remainingBudget < 0) {
    alert("Your Remaining budget is in the negative!");
  } else if (remainingBudget === 0) {
    alert("You are now at 0. You cannot add anything else!");
  }
  if (remainingBudget <= 0) {
    toggleFormsDisabled(true);
  }
  document.getElementById("billForm").reset();
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
  newExpense.classList.add("remove");
  newExpense.appendChild;
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

  totalSpent += foodsInput;
  document.getElementById("spent").innerText = `Total Spent: $${totalSpent}`;

  if (remainingBudget < 0) {
    alert("Your Remaining budget is in the negative!");
  } else if (remainingBudget === 0) {
    alert("You are now at 0. You cannot add anything else!");
  }
  if (remainingBudget <= 0) {
    toggleFormsDisabled(true);
  }
  document.getElementById("foodForm").reset();
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
  newExpense.classList.add("remove");
  newExpense.appendChild;
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

  totalSpent += clothingsInput;
  document.getElementById("spent").innerText = `Total Spent: $${totalSpent}`;

  if (remainingBudget < 0) {
    alert("Your Remaining budget is in the negative!");
  } else if (remainingBudget === 0) {
    alert("You are now at 0. You cannot add anything else!");
  }
  if (remainingBudget <= 0) {
    toggleFormsDisabled(true);
  }
  document.getElementById("clothingForm").reset();
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
  newExpense.classList.add("remove");
  newExpense.appendChild;
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

  totalSpent += entertainmentsInput;
  document.getElementById("spent").innerText = `Total Spent: $${totalSpent}`;

  if (remainingBudget < 0) {
    alert("Your Remaining budget is in the negative!");
  } else if (remainingBudget === 0) {
    alert("You are now at 0. You cannot add anything else!");
  }
  if (remainingBudget <= 0) {
    toggleFormsDisabled(true);
  }
  document.getElementById("entertainmentForm").reset();
}

function toggleFormsDisabled(state) {
  let addItemForms = document.querySelectorAll("form.add-item");
  for (let form of addItemForms) {
    for (let element of form.children) {
      element.disabled = state;
    }
  }
}

function resetAll() {
  billsExpenses = 0;
  foodExpenses = 0;
  clothingExpenses = 0;
  entertainmentExpenses = 0;
  startBudget = 0;
  remainingBudget = 0;
  totalSpent = 0;

  //new starting
  document.getElementById("start").innerText = `Starting Budget: $0`;
  //new remaining
  document.getElementById("remaining").innerText = `Remaining Budget: $0`;
  //new bills
  document.getElementById("billsTotal").innerText = `$0`;
  //new food
  document.getElementById("foodTotal").innerText = `$0`;
  //new clothing
  document.getElementById("clothingTotal").innerText = `$0`;
  //new entertainment
  document.getElementById("entertainmentTotal").innerText = `$0`;
  //total spent
  document.getElementById("spent").innerText = `Total Spent: $0`;

  let element = document.querySelectorAll(".remove");

  element.forEach((remove) => {
    remove.remove();
  });
}

function clearInput() {
  document.getElementById("billForm").reset();
  document.getElementById("foodForm").reset();
  document.getElementById("clothingForm").reset();
  document.getElementById("entertainmentForm").reset();
  document.getElementById("maxBudget").reset();
}

// start of the pie chart

const pieChart = document.getElementById("myChart");

const chartNames = ["Entertainment", "Bills", "Clothing", "Food"];

let chartData = [entertainmentInput, billsInput, foodInput, clothingInput];

const pieColors = ["blue", "red", "green", "yellow"];

new Chart(pieChart, {
  type: "pie",
  data: {
    labels: chartNames,
    datasets: [
      {
        backgroundColor: pieColors,
        borderWidth: 0,
        data: chartData,
      },
    ],
  },
});
