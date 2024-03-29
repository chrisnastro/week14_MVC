const signUp = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (username && email && password) {
        const res = await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (res.ok) {
            document.location.replace('/');
        } else {
            alert("Unable to sign up, please try again");
        }
    }
};

const signUpForm = document.querySelector('#signup-form');
if (signUpForm) {
    signUpForm.addEventListener('submit', signUp);
}