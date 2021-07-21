const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo){
    const li = document.createElement("li"); //JS로 li를 만들어줌, createElement()안에는 꼭 li 태그를 써줘야 한다. but 변수명은 li로 안해줘도 된다. 
    const span = document.createElement("span"); //JS로 span을 만들어줌
    li.appendChild(span); //그 span을 li 내부에 집어넣었다. 
    span.innerText = newTodo; //텍스트를 span 내부에 넣었다.
    toDoList.appendChild(li); //li를 list에 붙이기 
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; 
    toDoInput.value = "";
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);