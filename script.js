const year = new Date().getFullYear();
const form = document.querySelector("form");
const result = document.getElementById("result");
const section = document.querySelector("section");
const resetBtn = document.getElementById("resetBtn");

const startingYear = 1987;

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

  result.textContent = inputYear < startingYear ? "La Fraternidad aun no existia en ese entonces" : inputYear == startingYear ? "Hola tia Vi" : yearsInFraternity >= 0  ? `Años en la fraternidad: ${yearsInFraternity}`: "Pero tu vienes del futuro.";
});