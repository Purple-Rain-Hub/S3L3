const formtoDoList = document.getElementById("formtoDoList");
const btntoDo = document.getElementById("btntoDo");
const list = document.getElementById("list");
const form = document.getElementById("form");
let listItem;
const inputArray = [];

addEventListener("load", init());

function init() {
  //btntoDo.setAttribute("disabled", "true");
}

btntoDo.addEventListener("click", function (e) {
  formtoDoList.value.trim();
  if (formtoDoList.value !== "" && formtoDoList.value !== " ") {
    e.preventDefault();
    inputArray.push(formtoDoList.value);
    form.reset();
    printList();
  } else alert("Non è il momento di non fare niente!");
});

function printList() {
  list.innerHTML = "";
  for (i = 0; i < inputArray.length; i++) {
    listItem = document.createElement("li");
    listItem.innerText = inputArray[i];
    const btnRemove = document.createElement("button");
    btnRemove.setAttribute("type", "button");
    btnRemove.setAttribute("onclick", `removeItem(${i})`);
    btnRemove.innerText = "❌";
    list.appendChild(listItem);
    listItem.appendChild(btnRemove);
    listItem.setAttribute("onclick", `linedText(${i})`)
  }
}

function removeItem(i) {
  inputArray.splice(i, 1);
  printList();
}

function linedText(i){
    inputArray[i].style.textDecoration = "line-through";
    console.log(inputArray[i]);
    
}
