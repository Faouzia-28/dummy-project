const button = document.getElementById("pulseBtn");
const widget = document.getElementById("widget");
const text = document.getElementById("widgetText");
const stamp = document.getElementById("stamp");

stamp.textContent = `Loaded at ${new Date().toLocaleString()}`;

button.addEventListener("click", () => {
  widget.classList.add("active");
  text.textContent = "Pulse sent";

  setTimeout(() => {
    widget.classList.remove("active");
    text.textContent = "Idle";
  }, 1400);
});
