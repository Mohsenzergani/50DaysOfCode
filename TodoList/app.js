// structure solve problem
// 1 element from html
// 2 select the class icon in css
// 3 add to function add to do and tested
// 4 add addEventListener to add  todoList in html
// 5 create complete and remove function
// 6 save to todo list in local storage
// get elements

const clearBtn = document.querySelector(".clear");
const toDoList = document.querySelector("#list");
const toDoInput = document.querySelector("#input");
const toDoAddBtn = document.querySelector(".fa-plus-circle");
// -----------------------------------------------------------------

// Selecting the icon class names
const checkBtn = "fa-check-circle";
const unCheckBtn = "fa-circle-thin";
const textLineThrough = "line-through";
const addBtn = "fa fa-plus-circle";
// -------------------------------------------------------------------------------------------------------------------
// To Do Container
// let toDoContainer = [];
// let id = 0;
let toDoContainer, id;

// -------------------------------------------------------------------------------------------------------------------

// Clear the local storage
let toDoData = localStorage.getItem("to-do-item");
if (toDoData) {
  toDoContainer = JSON.parse(toDoData);
  id = toDoContainer.length;
  loadToDoContainer(toDoContainer);
} else {
  toDoContainer = [];
  id = 0;
}
function loadToDoContainer(array) {
  array.forEach(function (item) {
    addToDo(item.name, item.id, item.done, item.trash);
  });
}

// Clear the local storage
clearBtn.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});
// -------------------------------------------------------------------------------------------------------------------
// addToDo Function get 4 paramter
function addToDo(toDo, id, done, trash) {
  if (trash) return;
  const toDoDone = done ? checkBtn : unCheckBtn;
  const toDoLine = done ? textLineThrough : "";
  const item = `
      <li class="item">
        <i class="fa ${toDoDone} complete" status="complete" id="${id}"></i>
        <p class="text ${toDoLine}">${toDo}</p>
        <i class="fa fa-trash-o delete" status="delete" id="${id}"></i>
      </li>
     
    `;
  const toDoItePosition = "beforeend";
  toDoList.insertAdjacentHTML(toDoItePosition, item);
}
// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML

// addToDo("endign The fucking course",1,false,true)
// addToDo("walk the dogs", 0, false, false);
// addToDo("walk the dogs", 0, true, false);
// addToDo("walk the dogs", 0, true, true);
// -------------------------------------------------------------------------------------------------------------------

// Adding a to-do the list when the enter key is pressed
document.addEventListener("keyup", displayToDo);
// Adding a to-do the list when the plus icon is clicked
toDoAddBtn.addEventListener("click", displayToDo);

// displayToDo Function
function displayToDo(e) {
  if (e.keyCode === 13 || e.target.classList.value === addBtn) {
    const toDo = input.value;
    if (toDo) {
      addToDo(toDo, id, false, false);
      toDoContainer.push({
        name: toDo,
        id: id,
        done: false,
        trash: false,
      });
      // Persisting to local storage -> updating the local storage
      localStorage.setItem("to-do-item", JSON.stringify(toDoContainer));

      id++;
    }
    input.value = "";
  }
}

// Persisting to local storage -> updating the local storage
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

// -------------------------------------------------------------------------------------------------------------------

// When a to do is completed
function completeToDo(toDoItem) {
  toDoItem.classList.toggle(checkBtn);
  toDoItem.classList.toggle(unCheckBtn);
  toDoItem.parentNode.querySelector(".text").classList.toggle(textLineThrough);
  toDoContainer[toDoItem.id].done = toDoContainer[toDoItem.id].done
  ? false
  : true;
  // console.log(toDoContainer[toDoItem.id]);
  
}
// when a to do is remove
function removeToDo(toDoItem) {
  toDoItem.parentNode.parentNode.removeChild(toDoItem.parentNode);
  toDoContainer[toDoItem.id].trash = true;
  // console.log(toDoContainer[toDoItem.id]);

}
// Targeting the dynamically created to do items
toDoList.addEventListener("click", function (e) {
  if (
    e.path[0].localName === "p" ||
    e.path[0].localName === "li" ||
    e.path[0].localName === "ul"
  )
    return;
  const toDoItem = e.target;
  const toDoStatus = toDoItem.attributes.status.value;
  // console.log(toDoStatus);
  if (toDoStatus === "complete") {
    completeToDo(toDoItem);
  } else if (toDoStatus === "delete") {
    removeToDo(toDoItem);
  }

  localStorage.setItem("to-do-item", JSON.stringify(toDoContainer));
});
