document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const loginToggle = document.getElementById('loginToggle');
    const signupToggle = document.getElementById('signupToggle');
    const userInfo = document.getElementById('userInfo');
    const userName = document.getElementById('userName');
    const userEmail = document.getElementById('userEmail');
    const logoutBtn = document.getElementById('logoutBtn');
    const formContainer = document.querySelector('.form-container');

    loginToggle.addEventListener('click', () => {
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
        loginToggle.classList.add('active');
        signupToggle.classList.remove('active');
    });

    signupToggle.addEventListener('click', () => {
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
        signupToggle.classList.add('active');
        loginToggle.classList.remove('active');
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = loginForm.querySelector('input[type="email"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;
        // Here you would typically validate the login credentials
        // For this example, we'll just set the user as logged in
        setLoggedIn(email, email.split('@')[0]);
    });

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = signupForm.querySelector('input[type="text"]').value;
        const email = signupForm.querySelector('input[type="email"]').value;
        const password = signupForm.querySelector('input[type="password"]').value;
        const confirmPassword = signupForm.querySelectorAll('input[type="password"]')[1].value;

        if (password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }

        // Here you would typically send the signup data to a server
        // For this example, we'll just set the user as logged in
        setLoggedIn(email, name);
    });

    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('user');
        showLoginForm();
    });

    function setLoggedIn(email, name) {
        const user = { email, name };
        localStorage.setItem('user', JSON.stringify(user));
        showUserInfo(user);
    }

    function showUserInfo(user) {
        formContainer.style.display = 'none';
        userInfo.style.display = 'block';
        userName.textContent = user.name;
        userEmail.textContent = user.email;
    }

    function showLoginForm() {
        formContainer.style.display = 'block';
        userInfo.style.display = 'none';
    }

    // Check if user is already logged in
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        showUserInfo(user);
    }
});