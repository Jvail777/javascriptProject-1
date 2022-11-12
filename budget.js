let billsInput = document.querySelector("#billsInput");
let foodInput = document.querySelector("#foodInput");
let clothingInput = document.querySelector("#clothingInput");
let entertainmentInput = document.querySelector("#entertainmentInput");
let billAdd = document.querySelector("#billForm");
let foodAdd = document.querySelector("#foodForm");
let clothingAdd = document.querySelector("#clothingForm");
let entertainmentAdd = document.querySelector("#entertainmentForm");

// let foodTotal = Document.querySelector("#foodTotal");
// let clothingTotal = Document.querySelector("#clothingTotal");
// let entertainmentTotal = Document.querySelector("#entertainmentTotal");

let billsExpenses = 0;
let foodExpenses = 0;
let clothingExpenses = 0;
let entertainmentExpenses = 0;

billAdd.addEventListener("submit", bills);
foodAdd.addEventListener("submit", food);
clothingAdd.addEventListener("submit", clothing);
entertainmentAdd.addEventListener("submit", entertainment);

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

  let billInput = expense.amount;

  billsExpenses += billInput;

  document.getElementById("billsTotal").innerText = `$${billsExpenses}`;
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

  let billInput = expense.amount;

  billsExpenses += billInput;

  document.getElementById("billsTotal").innerText = `$${billsExpenses}`;
}
