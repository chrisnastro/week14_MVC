const signUp = async (event) => {
    event.preventDefault();
    const username = document.querySelector("#username").value.trim();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();

    if (username && password) {
        const response = await fetch("/apit/users/signup", {
            method: "POST",
            body: JSON.stringify({ username, email, password }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/");
        } else {
            alert("Unable to sign up");
        }
    }
};

const signUpForm = document.querySelector("#signup-form");
if (signUpForm) {
    signUpForm.addEventListener("submit", signUp);
}