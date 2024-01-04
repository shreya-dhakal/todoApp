const addTask = () => {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskInput.value;
        taskItem.onclick = function () {
            taskItem.remove();
        };

        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
    console.log("this is day 2")
}
