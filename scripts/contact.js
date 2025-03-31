// --------------- CUSTOMER SELECT/FORM ---------------
document.addEventListener("DOMContentLoaded", function () {
  const selectElement = document.querySelector(".form_input.is-select-input");
  const forms = document.querySelectorAll(".contact7_form-block");
  const formNames = document.querySelectorAll("[data-form-name]");

  selectElement.addEventListener("change", function () {
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const selectedText = selectedOption.innerText;
    console.log(selectedText);

    forms.forEach(form => form.classList.remove("is-active"));

    formNames.forEach(formName => {
      if (formName.innerText.trim() === selectedText.trim()) {
        const form = formName.closest(".contact7_form-block");
        if (form) {
          form.classList.add("is-active");
        }
      }
    });
  });
});
