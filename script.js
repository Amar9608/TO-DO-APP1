document.addEventListener('DOMContentLoaded', () => {
    const newTodoInput = document.getElementById('new-todo');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    addBtn.addEventListener('click', addTodo);
    todoList.addEventListener('click', handleTodoActions);

    function addTodo() {
        const todoText = newTodoInput.value.trim();
        if (todoText !== '') {
            const todoItem = document.createElement('li');

            todoItem.innerHTML = `
                <span>${todoText}</span>
                <div class="actions">
                    <button class="complete-btn">Complete</button>
                    <button class="edit-btn">Edit</button>
                    <button class="delete-btn">Delete</button>
                </div>
            `;

            todoList.appendChild(todoItem);
            newTodoInput.value = '';
        }
    }

    function handleTodoActions(event) {
        const target = event.target;
        const todoItem = target.closest('li');

        if (target.classList.contains('complete-btn')) {
            todoItem.classList.toggle('completed');
        } else if (target.classList.contains('edit-btn')) {
            editTodoItem(todoItem);
        } else if (target.classList.contains('delete-btn')) {
            todoItem.remove();
        }
    }

    function editTodoItem(todoItem) {
        const todoText = todoItem.querySelector('span').innerText;
        const newTodoText = prompt('Edit your task:', todoText);

        if (newTodoText !== null && newTodoText.trim() !== '') {
            todoItem.querySelector('span').innerText = newTodoText;
        }
    }
});
