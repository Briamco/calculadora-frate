const year = new Date().getFullYear();
const form = document.querySelector("form");
const result = document.getElementById("result");
const section = document.querySelector("section");
const resetBtn = document.getElementById("resetBtn");

section.hidden = true;

resetBtn.addEventListener("click", () => {
  section.hidden = true;
  form.classList.remove("hidden");
  form.yearInput.value = "";
});

form.addEventListener("submit", () => {
  event.preventDefault();
  const inputYear = form.yearInput.valueAsNumber;
  const yearsInFraternity = year - inputYear;
  form.classList.add("hidden");
  section.hidden = false;
  result.textContent = yearsInFraternity <= 0  ? `Años en la fraternidad: ${yearsInFraternity}`: "Pero tu vienes del futuro.";
});