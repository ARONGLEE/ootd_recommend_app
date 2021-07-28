const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const todoForm = document.querySelector("#main-form");
const greeting = document.querySelector("#greeting");
const usernameOut = document.querySelector("#saved-username");

const HIDDEN_CLASSNAME = "hidden";
const SHOWN_CLASSNAME = "show";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    todoForm.classList.add(SHOWN_CLASSNAME);
    todoForm.style.margin = "0 auto";
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`; 
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){ //savedUsername 값이 null인 경우, 즉 local storage에 유저 정보가 없을 때, 
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
   paintGreetings(savedUsername);
}
