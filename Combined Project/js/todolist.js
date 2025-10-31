document.addEventListener('DOMContentLoaded', function() {
    toForumBtn = document.getElementById('toForumBtn');
    if (toForumBtn) {
        toForumBtn.addEventListener('click', function() {
            window.location.href = "../employee/index.html";
        });
    }
});