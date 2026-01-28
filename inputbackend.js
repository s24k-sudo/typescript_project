var input = document.getElementById("username");
var btn = document.getElementById("btn");
var msg = document.getElementById("msg");
btn.addEventListener("click", function () {
    console.log("Button clicked"); // 👈 DEBUG LINE
    if (input.value.trim() === "") {
        msg.innerText = "Please enter your name";
        msg.style.color = "red";
    }
    else {
        msg.innerText = "Name entered successfully";
        msg.style.color = "green";
    }
});
