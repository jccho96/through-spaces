const chatModal = document.querySelector(".chat");
const chatBtn = document.querySelector(".chat-btn");
const chatX = document.getElementById("chatX");

chatBtn.addEventListener("click", () => {
  chatModal.classList.add("chat-display");
});

chatX.addEventListener("click", () => {
  chatModal.classList.remove("chat-display");
});
