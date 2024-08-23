const tasks = []; // Simulating a task database

function getTaskCompletionRate() {
    // Filter the tasks array to get the completed tasks
    const completedTasks = tasks.filter(task => task.completed).length;

    // Calculate the task completion rate as a percentage
    return (completedTasks / tasks.length) * 100 || 0;
}

function getProductivityTrends() {
    // Calculate the total tasks, completed tasks, and pending tasks
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    const pendingTasks = tasks.filter(task => !task.completed).length;

    // Return an object with the productivity trends
    return {
        totalTasks,
        completedTasks,
        pendingTasks,
    };
}

module.exports = { getTaskCompletionRate, getProductivityTrends };