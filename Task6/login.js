function loginUser() {

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");

    if (!storedUsername || !storedPassword) {
        alert("Please Register First");
        return;
    }

    if (
        username === storedUsername &&
        password === storedPassword
    ) {
        localStorage.setItem("isLoggedIn", "true");

        window.location.href = "home.html";
    }
    else {
        alert("Invalid Username or Password");
    }
}