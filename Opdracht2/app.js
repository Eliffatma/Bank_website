const users = [
    { username: 'gebruiker1', password: 'Abc!' },
    { username: 'gebruiker2', password: 'Def!' },
    { username: 'gebruiker3', password: 'Ghi!' }
];

function login() {
    const usernameInput = document.getElementById('Gebruikersnaam');
    const passwordInput = document.getElementById('Wachtwoord');
    const notification = document.getElementById('error-msg');

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    notification.textContent = '';

    if (!username || !password) {
        showNotification(notification, 'Vul alle velden in.', 'red');
        return;
    }

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        showNotification(notification, 'Inloggen succesvol!', 'green');
        
        const loginButton = document.querySelector('button');
        if (loginButton) loginButton.disabled = true;

        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1000);
    } else {
        showNotification(notification, 'Ongeldige gebruikersnaam of wachtwoord.', 'red');
        
        passwordInput.value = '';
        passwordInput.focus();
    }
}

function showNotification(element, message, color) {
    element.style.color = color;
    element.textContent = message;
}

document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('Gebruikersnaam');
    const usernameInput = document.getElementById('Wacfhtwoord');
    
    if (passwordInput) {
        passwordInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                login();
            }
        });
    }
    
    if (usernameInput) {
        usernameInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                login();
            }
        });
    }
});