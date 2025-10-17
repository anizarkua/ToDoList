const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let tasks = [];

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskText = input.value.trim();
    console.log("Input value:", taskText); // პირველი ფუნქციონალი

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push(taskText);

    input.value = "";

    renderTasks();
});

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        taskList.innerHTML += `
      <li>${index + 1}. ${task}</li>
    `;
    });
}
