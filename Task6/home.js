if (localStorage.getItem("isLoggedIn") !== "true") {

    alert("Please Login First");

    window.location.href = "login.html";
}

let username = localStorage.getItem("username");

document.getElementById("welcomeText").innerHTML =
    "Welcome, " + username + " 👋";

function logoutUser() {

    localStorage.removeItem("isLoggedIn");

    alert("Logged out successfully");

    window.location.href = "login.html";
}