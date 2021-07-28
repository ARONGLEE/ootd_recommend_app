const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); //클릭한 li.id와 다른 toDo는 남겨두고 싶다는 의미
    saveToDos(); //변경된 값을 다시 localStorage에 저장한다. 
}

function paintToDo(newTodo){
    const li = document.createElement("li"); 
    li.id = newTodo.id;
    li.className = "todo-style";
    const span = document.createElement("span"); 
    span.innerText = newTodo.text; 
    const button = document.createElement("button"); 
    button.className = "checkbtn";
    button.innerText = "X"; 
    button.addEventListener("click", deleteToDo) 
    li.appendChild(span); 
    li.appendChild(button); 
    toDoList.appendChild(li); 
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; 
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
