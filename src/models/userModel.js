class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    shareTask(taskId, user) {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
            user.addTask(task);
        }
    }
}

module.exports = User;
