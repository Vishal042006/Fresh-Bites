document.querySelector(".menu").addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("show");
});

const form = document.getElementById("registerForm");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thanks for registering! We’ll keep you updated.");
    form.reset();
  });
}
