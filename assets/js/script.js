const formtoDoList = document.getElementById("formtoDoList");
const btntoDo = document.getElementById("btntoDo");
const list = document.getElementById("list");
const form = document.getElementById("form");
const inputArray = [];

addEventListener("load", init());

function init() {
  btntoDo.setAttribute('disabled', 'true');
  
}

btntoDo.addEventListener("click", function (e) {
  e.preventDefault();
  inputArray.push(formtoDoList.value);
  form.reset();
  printList();
});

function printList() {
  list.innerHTML = "";
  for (i = 0; i < inputArray.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerText = inputArray[i];
    const btnRemove = document.createElement("button")
    btnRemove.setAttribute('type', 'button');
    btnRemove.setAttribute('onclick', `removeItem(${i})`);
    btnRemove.innerText = "❌";
    list.appendChild(listItem);
    listItem.appendChild(btnRemove)
  }
}

function removeItem(i){
    inputArray.splice(i, 1);
    printList();
}