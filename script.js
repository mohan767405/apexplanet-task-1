document.getElementById("nameForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting

    const name = document.getElementById("nameInput").value;

    if (name.trim() === "") {
        alert("Please enter your name!");
        return;
    }

    document.getElementById("greetingMessage").textContent = "Hello, " + name + "! 👋";
});