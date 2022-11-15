let mobileForm = document.querySelector("#subcontainer");
let category = document.querySelector("#drop")

mobileForm.addEventListener("submit",addEntry);

function addEntry(event){
event.preventDefault();
let expenseName = transaction.value;
let expenseAmount = parseFloat(numberAmount.value);
let categorys = drop.value;
let expense = {
    Name: expenseName,
    Amount: expenseAmount,
    Category: categorys
}

}