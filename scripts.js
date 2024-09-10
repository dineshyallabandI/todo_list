document.getElementById('add-btn').addEventListener('click', function() {
    const inputField = document.getElementById('todo-input');
    const inputValue = inputField.value;

    if (inputValue.trim() !== '') {
        addTodoItem(inputValue);
        inputField.value = '';
    }
});

function addTodoItem(text) {
    const todoList = document.getElementById('todo-items');
    
    const newItem = document.createElement('li');
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `item${todoList.children.length + 1}`;
    
    const label = document.createElement('label');
    label.htmlFor = checkbox.id;
    label.appendChild(document.createTextNode(text));
    
    const editBtn = document.createElement('span');
    editBtn.className = 'edit';
    editBtn.appendChild(document.createTextNode('✎'));
    editBtn.setAttribute('onclick', 'editItem(this)');
    
    const removeBtn = document.createElement('span');
    removeBtn.className = 'remove';
    removeBtn.appendChild(document.createTextNode('×'));
    removeBtn.setAttribute('onclick', 'removeItem(this)');
    
    newItem.appendChild(checkbox);
    newItem.appendChild(label);
    newItem.appendChild(editBtn);
    newItem.appendChild(removeBtn);
    
    todoList.appendChild(newItem);
}

function removeItem(element) {
    const item = element.parentNode;
    item.parentNode.removeChild(item);
}

function editItem(element) {
    const item = element.parentNode;
    const label = item.querySelector('label');
    const editBtn = element;
    
    if (editBtn.textContent === '✎') {
        // Change to edit mode
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.value = label.textContent;
        label.replaceWith(inputField);
        editBtn.textContent = '💾'; // Change icon to save
    } else {
        // Save the edited text
        const inputField = item.querySelector('input[type="text"]');
        const newLabel = document.createElement('label');
        newLabel.htmlFor = item.querySelector('input[type="checkbox"]').id;
        newLabel.appendChild(document.createTextNode(inputField.value));
        inputField.replaceWith(newLabel);
        editBtn.textContent = '✎'; // Change icon back to edit
    }
}