function setupPagination(items) {
    const itemsPerPage = 10;
    const pagination = document.getElementById('task-pagination');
    pagination.innerHTML = ""
    const pageCount = Math.ceil(items.length / itemsPerPage);

    for (let i = 1; i <= pageCount; i++) {
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = i;
        link.onclick = function () {
            displayItems(i, items);
        };
        pagination.appendChild(link);
    }
}

function addNewTask() {
    // Add logic to handle adding a new task
    const taskName = document.getElementById('taskName').value;
    // Add other task details handling logic
    console.log('Adding new task:', taskName);
}

function editTask(name) {
    // Implement your edit functionality here
    console.log(`Editing item: ${name}`);
}

function displayTasks(pageNumber, items) {
    const itemList = document.getElementById('item-list');
    itemList.innerHTML = '';
    const itemsPerPage = 10;
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToDisplay = items.slice(startIndex, endIndex);

    itemsToDisplay.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.description}</td>
            <td>${item.deadline}</td>
            <td>${item.status}</td>
            <td><button class="edit-btn" onclick="editTask('${item.name}')">Edit</button></td>
        `;
        itemList.appendChild(row);
    });
}

function showTasks(type) {
    document.getElementById("tasks-add").style.display="none";
    document.getElementById("tasks-list-table").style.display="block";
    console.log(type)
    const items = [
        { name: 'Item 1', description: 'Description 1', deadline: '2023-12-31', status: 'Pending' },
        { name: 'Item 2', description: 'Description 2', deadline: '2023-11-15', status: 'Completed' },
        { name: 'Item 1', description: 'Description 1', deadline: '2023-12-31', status: 'Pending' },
        { name: 'Item 2', description: 'Description 2', deadline: '2023-11-15', status: 'Completed' },
        { name: 'Item 1', description: 'Description 1', deadline: '2023-12-31', status: 'Pending' },
        { name: 'Item 2', description: 'Description 2', deadline: '2023-11-15', status: 'Completed' }
        // Add more items as needed
    ];
   
    displayTasks(1, items);
    setupPagination(items);
}

function showTaskAddForm() {
    document.getElementById("tasks-add").style.display="block";
    document.getElementById("tasks-list-table").style.display="none";
}
