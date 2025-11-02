const employees = {
    'mack': {
        name: 'Mack Whiteman',
        role: 'Senior Developer',
        department: 'Engineering',
        projects: ['Project A', 'Project C'],
        tasks: [
            { name: 'Task 1', project: 'Project A', status: 'In Progress', dueDate: '2025-05-10' },
            { name: 'Task 2', project: 'Project C', status: 'Overdue', dueDate: '2025-06-15' },
            { name: 'Task 3', project: 'Project C', status: 'Completed', dueDate: '2025-06-15' }
        ],
        metrics: {
            currentTasks: 5,
            completedTasks: 15,
            overdueTasks: 2
        }
    },
    'sarah': {
        name: 'Sarah Jane',
        role: 'UI Designer',
        department: 'Design',
        projects: ['Project A', 'Project B'],
        tasks: [
            { name: 'Task 1', project: 'Project A', status: 'Completed', dueDate: '2025-04-25' },
            { name: 'Task 2', project: 'Project B', status: 'In Progress', dueDate: '2025-05-20' }
        ],
        metrics: {
            currentTasks: 3,
            completedTasks: 22,
            overdueTasks: 1
        }
    },
    
};

document.addEventListener('DOMContentLoaded', function() {

    const urlParams = new URLSearchParams(window.location.search);
    const employeeId = urlParams.get('id');

    if (employeeId && employees[employeeId]) {
        loadEmployeeData(employeeId);
    } else {
        console.error('Employee not found');
    }
});

function loadEmployeeData(employeeId) {
    const employee = employees[employeeId];

    document.title = `${employee.name} - Employee Details`;
    document.getElementById('employeeName').textContent = employee.name;
    document.getElementById('employeeHeader').textContent = employee.name;

    document.getElementById('employeeRole').textContent = employee.role;
    document.getElementById('employeeDepartment').textContent = employee.department;
    document.getElementById('employeeProjects').textContent = employee.projects.join(', ');

    document.getElementById('currentTaskCount').textContent = employee.metrics.currentTasks;
    document.getElementById('completedTaskCount').textContent = employee.metrics.completedTasks;
    document.getElementById('overdueTasks').textContent = employee.metrics.overdueTasks;

    const taskTableBody = document.getElementById('taskTableBody');
    taskTableBody.innerHTML = '';

    employee.tasks.forEach(task => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${task.name}</td>
            <td>${task.project}</td>
            <td><span class="badge bg-${getStatusBadgeColor(task.status)}">${task.status}</span></td>
            <td>${task.dueDate}</td>
            <td>
                <div class="btn-group" role="group" aria-label="task actions">
                    <button type="button" class="btn btn-sm btn-outline-secondary">Reassign</button>
                    <button type="button" class="btn btn-sm btn-outline-warning">Edit</button>
                    <button type="button" class="btn btn-sm btn-outline-danger">Delete</button>
                </div>
            </td>
        `;
        taskTableBody.appendChild(row);
    });
}

function getStatusBadgeColor(status) {
    switch(status.toLowerCase()) {
        case 'completed':
            return 'success';
        case 'in progress':
            return 'primary';
        case 'overdue':
            return 'danger';
        default:
            return 'secondary';
    }
}