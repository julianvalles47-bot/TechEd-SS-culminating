// Wait for page to load
window.addEventListener("load", () => {
  const reveal = document.querySelector(".text-reveal");

  // trigger animation, is it nice
  setTimeout(() => {
    reveal.classList.add("active");
  }, 300);
});
