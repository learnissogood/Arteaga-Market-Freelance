const appendToTextarea = (id) => {
  const machine = document.getElementById(id);
  console.log(machine.textContent.trim());

  const textarea = document.getElementById("subject");
  textarea.value = `Consulta por: ${machine.textContent.trim()}`;

  const nameInput = document.getElementById("name");
  nameInput.focus();

  const form = document.getElementById("form");
  form.scrollIntoView({ behavior: "smooth" });
};