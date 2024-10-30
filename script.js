document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value;

    if (taskValue) {
        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskValue;

        // Add a complete button
        const completeBtn = document.createElement('button');
        completeBtn.textContent = '✔️';
        completeBtn.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        // Add a delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '❌';
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });

        // Append buttons to list item
        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);

        // Add the new list item to the task list
        document.getElementById('taskList').appendChild(li);

        // Clear the input
        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
});
