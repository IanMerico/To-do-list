// Get username from the URL parameters
const params = new URLSearchParams(window.location.search);
const username = params.get('name');
if (username) {
document.getElementById('username').textContent = username;
} else {
window.location.href = 'landing.html';
}

// Get the list element
const list = document.getElementById('list');

// Get the new item input and add button
const newItemInput = document.getElementById('new-item');
const addButton = document.getElementById('add-btn');

// Add a new item to the list
function addItem(text) {
// create a new li element
const li = document.createElement('li');
li.classList.add('todo-item');

// create a checkbox element
const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.addEventListener('change', () => {
if (checkbox.checked) {
span.classList.add('done');
} else {
span.classList.remove('done');
}
});

// create a span element for the item text
const span = document.createElement('span');
span.textContent = text;
span.classList.add('item-text');

// create the edit button element
const editButton = document.createElement('i');
editButton.classList.add('fas', 'fa-pen', 'edit-btn');
editButton.addEventListener('click', () => {
span.contentEditable = true;
span.focus();
span.classList.add('editable');
span.addEventListener('blur', () => {
span.contentEditable = false;
span.classList.remove('editable');
});
});

// create the input element for editing the item text
const input = document.createElement('input');
input.type = 'text';
input.value = text;
input.classList.add('item-input');
input.style.display = 'none';
input.addEventListener('blur', () => {
const updatedText = input.value;
span.textContent = updatedText;
span.style.display = 'inline-block';
input.style.display = 'none';
});

// create the delete button element
const deleteButton = document.createElement('i');
deleteButton.classList.add('fas', 'fa-trash', 'delete-btn');
deleteButton.addEventListener('click', () => {
li.remove();
});

// add the span, input, edit button, and delete button elements to the li element
li.appendChild(checkbox);
li.appendChild(span);
li.appendChild(input);
li.appendChild(editButton);
li.appendChild(deleteButton);

// add the new li element to the list
list.appendChild(li);
}

// Add a new item when the user clicks the Add button
addButton.addEventListener('click', () => {
const newItemText = newItemInput.value;
if (newItemText) {
addItem(newItemText);
newItemInput.value = '';
}
});

// Exit the app when the user clicks the Exit button
const exitButton = document.getElementById('exit-btn');
exitButton.addEventListener('click', () => {
window.location.href = 'landing.html';
});

// Add a feature that highlights the item text when the user hovers over it
const items = document.querySelectorAll('.item-text');
  items.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    item.classList.add('highlight');
  });
  item.addEventListener('mouseleave', () => {
    item.classList.remove('highlight');
  });
});

const date = new Date();
const options = { month: 'long', day: 'numeric', year: 'numeric' };
const formattedDate = date.toLocaleDateString('en-US', options);
document.getElementById("datetime").innerHTML = formattedDate;