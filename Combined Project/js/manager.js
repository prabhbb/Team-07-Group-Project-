document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('createTaskForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const project = document.getElementById('newTaskProject').value.trim() || '(No project)';
            const assignee = document.getElementById('newTaskAssignee').value.trim() || '(Unassigned)';
            const name = document.getElementById('newTaskName').value.trim() || '(No name)';
            const status = document.getElementById('newTaskStatus').value || 'To Do';

            const alertDiv = document.createElement('div');
            alertDiv.className = 'alert alert-success mt-2';
            alertDiv.textContent = `Created task: ${project} — ${name} (${assignee}) [${status}]`;
            form.parentElement.insertBefore(alertDiv, form.nextSibling);
            setTimeout(() => alertDiv.remove(), 3000);

            form.reset();
        });
    }
});
