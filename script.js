const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const error = document.getElementById('error');

addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        error.textContent = 'Por favor, introduce una tarea.';
        return;
    }
    error.textContent = '';

    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <span class="task-text">${taskText}</span>
        <div class="task-buttons">
            <button class="edit-button">Editar</button>
            <button class="delete-button">Eliminar</button>
        </div>
    `;
    taskList.appendChild(taskItem);
    taskInput.value = '';

    const deleteButton = taskItem.querySelector('.delete-button');
    deleteButton.addEventListener('click', () => {
        taskItem.remove();
    });

    const editButton = taskItem.querySelector('.edit-button');
    editButton.addEventListener('click', () => {
        const taskTextElement = taskItem.querySelector('.task-text');
        const currentText = taskTextElement.textContent;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = currentText;
        taskTextElement.replaceWith(input);
        input.focus();

        input.addEventListener('blur', () => {
            taskTextElement.textContent = input.value.trim();
            input.replaceWith(taskTextElement);
        });
    });
});