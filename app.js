const addTaskBtn = document.querySelector('#add-task');
const ul = document.querySelector('#task-list');
const filterInput = document.querySelector('#filter');

function addTask(e) {
    let text = document.querySelector('#task').value;
    if (text === '') {
        alert('Fill input !');
    } else {
        const li = document.createElement('li');
        li.className = 'list-item';
        li.innerHTML = `<p>${text}</p>
    <a class = 'link' href='#'><i class="fas fa-times"></i></a>`;
        ul.appendChild(li);
        document.querySelector('#task').value = '';
    }


    e.preventDefault();
}

function removeTask(e) {

    if (e.target.parentElement.classList.contains('link')) {
        e.target.parentElement.parentElement.remove();
    }
}

function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('li').forEach(function(task){
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1 ) {
            task.style.display = 'flex';
        } else {
            task.style.display = 'none';
        }
    });
}


addTaskBtn.addEventListener('click', addTask);
ul.addEventListener('click', removeTask);
filterInput.addEventListener('keyup', filterTasks);