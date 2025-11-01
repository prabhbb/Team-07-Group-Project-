//hard coded credentials
const validAdminCredentials = {
    username: "admin",
    password: "password123"
};
const validEmployeeCredentials = {
    username: "employee",
    password: "password123"
};

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageBox = document.getElementById('message');

    goToDashboard(username,password, messageBox);
    });

function goToDashboard(username, password, messageBox) {

          if (username === validAdminCredentials.username && password === validAdminCredentials.password) {
                  messageBox.textContent = 'Admin Login successful! Redirecting...';
                  messageBox.className = 'message success';
                  messageBox.style.display = 'block';
                  window.location.href = "manager/Index.html";
          }
          else if (username === validEmployeeCredentials.username && password === validEmployeeCredentials.password) {
                    messageBox.textContent = 'Employee Login successful! Redirecting...';
                    messageBox.className = 'message success';
                    messageBox.style.display = 'block';
                    window.location.href = "employee/employeepage.html";
          }
          else {
                    messageBox.textContent = 'Invalid username or password';
                    messageBox.className = 'message error';
                    messageBox.style.display = 'block';
          }
}
