const logout = async () => {
    const res = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
        document.location.replace('/');
    } else {
        alert('Unable to log out');
    }
};

const logoutButton = document.querySelector('#logout');
if (logoutButton) {
    logoutButton.addEventListener('click', logout);
}