const btn = document.getElementById("helloBtn");
const msg = document.getElementById("msg");

btn?.addEventListener("click", () => {
  msg.textContent = "Chào bạn, cảm ơn vì đã ghé qua website của tôi 😎";
});
