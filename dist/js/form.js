const myForm = document.forms[0],
    myInput = document.querySelector('#form_input'),
    myOutput = document.getElementById('my_output');

var tasks = [];



myInput.focus()
myForm.addEventListener('submit', function (ev) {
    ev.preventDefault();
    addTasksToArray()
    // renderTasks()
    finishTask()
})

function addTasksToArray() {
    var newTask = myInput.value;

    if (newTask.trim() === '') { alert("You can not add an empty array") }
    else if (tasks.includes(newTask)) { alert("You can not add a duplicated task") }
    else {

        tasks.push(newTask.toUpperCase())

        renderNewTask(newTask)

        // console.log(tasks)
    }
    myInput.value = ""
}

function renderTasks() {
    for (let index = 0; index < tasks.length; index++) {
        const task = tasks[index];
        myOutput.innerHTML += `<li class="list-group-item">${task}</li>`
    }
}

// OR

function renderNewTask(task) {
    myOutput.innerHTML += `<li class="list-group-item list-group-item-secondary">${task.toUpperCase()}</li>`
}


var finishTask = () => {
    console.log(myOutput.children)

    for (let index = 0; index < myOutput.children.length; index++) {
        const task = myOutput.children[index];
        task.onclick = function () {
            // console.log(this)

            // if (this.classList.contains('list-group-item-secondary')) {
            //     this.classList.add('list-group-item-success')
            //     this.classList.remove('list-group-item-secondary')
            // }
            // else {
            //     this.classList.remove('list-group-item-success')
            //     this.classList.add('list-group-item-secondary')
            // }

            /******************** OR */
            this.classList.toggle('list-group-item-success')
            this.classList.toggle('list-group-item-secondary')
        }
    }
}