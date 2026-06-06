function registerUser() {

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let phone = document.getElementById("phone").value.trim();

    if (
        username === "" ||
        email === "" ||
        password === "" ||
        phone === ""
    ) {
        alert("All fields are required");
        return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Registration Successful");

    window.location.href = "login.html";
}