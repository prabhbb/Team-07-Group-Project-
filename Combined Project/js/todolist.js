document.addEventListener('DOMContentLoaded', function() {
    toForumBtn = document.getElementById('toForumBtn');
    if (toForumBtn) {
        toForumBtn.addEventListener('click', function() {
            window.location.href = "../employee/index.html";
        });
    }

    logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            window.location.href = '../login.html';
        });
    }
});