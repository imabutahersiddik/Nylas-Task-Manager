document.getElementById('task-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-description').value;
    const dueDate = document.getElementById('task-due-date').value;

    const response = await fetch('/api/create-tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ meetingNotes: `${title}: ${description} (Due: ${dueDate})` }),
    });

    if (response.ok) {
        alert('Task added successfully!');
        loadTasks(); // Function to reload tasks
    } else {
        alert('Failed to add task.');
    }
});

async function loadTasks() {
    const response = await fetch('/api/tasks');
    const tasks = await response.json();
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `<strong>${task.title}</strong><p>${task.description}</p><small>Due: ${task.dueDate}</small>`;
        taskList.appendChild(taskItem);
    });
}

// Load tasks on page load
loadTasks();
