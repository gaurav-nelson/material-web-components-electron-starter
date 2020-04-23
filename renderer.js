// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
mdc.autoInit();

/** Initialize MDC Web components. */
const buttons = document.querySelectorAll('.mdc-button');
for (const button of buttons) {
  mdc.ripple.MDCRipple.attachTo(button);
}

const textFields = document.querySelectorAll('.mdc-text-field');
for (const textField of textFields) {
  mdc.textField.MDCTextField.attachTo(textField);
}

/** Custom javascript code. */
const greetMessageEl = document.querySelector('.greet-message');
const greetButton = document.querySelector('.greet-button');
greetButton.addEventListener('click', () => {
  const firstNameInput = document.querySelector('.first-name-input').value;
  const lastNameInput = document.querySelector('.last-name-input').value;
  let name;
  if (firstNameInput || lastNameInput) {
    name = firstNameInput + ' ' + lastNameInput;
  } else {
    name = 'Anonymous';
  }
  greetMessageEl.textContent = `Hello, ${name}!`;
});

