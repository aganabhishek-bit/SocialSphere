function toggleMode() {
    document.body.classList.toggle("dark-mode");

    const modeBtn = document.getElementById("modeBtn");
    modeBtn.innerHTML = document.body.classList.contains("dark-mode")
        ? "Light Mode"
        : "Dark Mode";

    alert("Theme changed!");
}

function demoFunction() {
    document.getElementById("demoText").innerHTML = "Inner HTML changed!";
    alert("Text updated using innerHTML!");
}
