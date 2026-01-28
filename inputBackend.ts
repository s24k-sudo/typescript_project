const input = document.getElementById("username") as HTMLInputElement;
const btn = document.getElementById("btn") as HTMLButtonElement;
const msg = document.getElementById("msg") as HTMLParagraphElement;

btn.addEventListener("click", () => {
  console.log("Button clicked"); 

  if (input.value.trim() === "") {
    msg.innerText = "Please enter your name";
    msg.style.color = "red";
  } else {
    msg.innerText = "Name entered successfully";
    msg.style.color = "green";
  }
});
