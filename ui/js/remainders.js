function setupPagination(items) {
    const itemsPerPage = 10;
    const pagination = document.getElementById('reminder-pagination');
    pagination.innerHTML = ""
    const pageCount = Math.ceil(items.length / itemsPerPage);

    for (let i = 1; i <= pageCount; i++) {
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = i;
        link.onclick = function () {
            displayReminders(i, items);
        };
        pagination.appendChild(link);
    }
}

function addReminder() {
    // Add logic to handle adding a new task
    const taskName = document.getElementById('reminder-name').value;
    // Add other task details handling logic
    console.log('Adding new task:', taskName);
}

function editReminder(name) {
    // Implement your edit functionality here
    console.log(`Editing item: ${name}`);
}

function displayReminders(pageNumber, items) {
    const itemList = document.getElementById('reminders-list');
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
            <td><button class="edit-btn" onclick="editReminder('${item.name}')">Edit</button></td>
        `;
        itemList.appendChild(row);
    });
}

function showReminders(type) {
    document.getElementById("reminders-add").style.display="none";
    document.getElementById("reminders-list-table").style.display="block";
    console.log(type)
    const items = [
        { name: 'Birthday', description: 'Sravan Birthday', deadline: '05 Jan', status: 'Pending' },
        { name: 'Payment remainder', description: 'Credit card bill need to be paid.', deadline: '08 Jan', status: 'Completed' },
        // Add more items as needed
    ];
   
    displayReminders(1, items);
    setupPagination(items);
}

function showRemainderForm() {
    document.getElementById("reminders-add").style.display="block";
    document.getElementById("reminders-list-table").style.display="none";
}
