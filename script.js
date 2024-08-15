document.querySelectorAll('.number').forEach((button) => {
  button.addEventListener('click', function () {
    let inputField = document.querySelector('input[name="input"]');
    let value = this.textContent.trim();

    if (value === 'ac') {
      inputField.value = '';
    } else if (value === 'del') {
      inputField.value = inputField.value.slice(0, -1);
    } else if (value === '=') {
      try {
        inputField.value = eval(inputField.value.replace('*', '*'));
      } catch {
        inputField.value = 'Error';
      }
    } else {
      inputField.value += value;
    }
  });
});
