const form = document.getElementById('taskForm');
const input = document.getElementById('taskInput');
const list = document.getElementById('taskList');
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const text = input.value.trim();
  if (text === '') return;
  const li = document.createElement('li');
  li.textContent = text;
  const del = document.createElement('button');
  del.innerHTML = '<i class="fas fa-trash"></i>';
  del.classList.add('delete-btn');
  del.addEventListener('click', () => li.remove());
  li.appendChild(del);
  list.appendChild(li);
  input.value = '';
});

console.log('To-Do App Loaded');
alert('Welcome to My To-Do List!');
