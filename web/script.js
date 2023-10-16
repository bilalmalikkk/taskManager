// JavaScript code for form validation
document.getElementById("login-form").onsubmit = function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    // You can add your validation logic here and perform login actions.
    console.log(`Login with username: ${username} and password: ${password}`);
    window.location.href = "home.html";
};

document.getElementById("signup-form").onsubmit = function (e) {
    e.preventDefault();
    const newUsername = document.getElementById("new-username").value;
    const newPassword = document.getElementById("new-password").value;
    
    // You can add your validation logic here and perform signup actions.
    console.log(`Sign up with new username: ${newUsername} and password: ${newPassword}`);
    window.location.href = "login.html";
};

// JavaScript code for task manager
const taskInput = document.getElementById("task");
const taskList = document.getElementById("task-list");

document.getElementById("add-task").onclick = function () {
    const taskText = taskInput.value;
    if (taskText !== "") {
        const li = document.createElement("li").appendChild("h4");
    
        li.childNodes[0].textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = "";
    }

};
