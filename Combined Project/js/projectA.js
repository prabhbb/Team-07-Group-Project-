document.addEventListener('DOMContentLoaded', function () {
    const modalElement = document.getElementById('taskModal');
    const taskModal = new bootstrap.Modal(modalElement);
    const taskRows = document.querySelectorAll('#taskTable tbody tr');

    taskRows.forEach(row => {
        row.addEventListener('click', () => {
            const cells = row.querySelectorAll('td');
            const taskName = cells[0].textContent.trim();
            const employeeName = cells[1].textContent.trim();
            const status = cells[2].textContent.trim();
            const dueDate = cells[3].textContent.trim();

            document.getElementById('taskName').value = taskName;
            document.getElementById('employeeName').value = employeeName;
            document.getElementById('taskStatus').value = status === 'Complete' ? 'complete' : 'inProgress';
            document.getElementById('dueDate').value = dueDate;
            taskModal.show();
        });
    });
});
