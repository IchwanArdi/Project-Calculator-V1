// Menangkap semua elemen tombol
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const actionButtons = document.querySelectorAll('.action');
const equalsButton = document.querySelector('.equals');
const inputField = document.getElementById('input');

// Fungsi untuk memperbarui input
function updateInput(value) {
  if (inputField.value === 'Error') {
    inputField.value = value;
  } else {
    inputField.value += value;
  }
}

// Event listener untuk tombol angka
numberButtons.forEach((button) => {
  button.addEventListener('click', function () {
    let value = this.textContent.trim();
    updateInput(value);
  });
});

// Event listener untuk tombol operator
operatorButtons.forEach((button) => {
  button.addEventListener('click', function () {
    let value = this.textContent.trim();
    // Mengubah simbol × menjadi * untuk evaluasi
    if (value === '×') {
      value = '*';
    }
    updateInput(value);
  });
});

// Event listener untuk tombol aksi (AC, DEL)
actionButtons.forEach((button) => {
  button.addEventListener('click', function () {
    let value = this.textContent.trim();

    if (value === 'AC') {
      inputField.value = '';
    } else if (value === 'DEL') {
      inputField.value = inputField.value.slice(0, -1);
    }
  });
});

// Event listener untuk tombol sama dengan (=)
equalsButton.addEventListener('click', function () {
  try {
    // Evaluasi ekspresi matematika
    // Mengubah × menjadi * agar bisa dievaluasi
    const expression = inputField.value.replace(/×/g, '*');
    inputField.value = eval(expression);

    // Menangani hasil yang tidak terdefinisi atau tidak valid
    if (inputField.value === 'undefined' || !isFinite(inputField.value)) {
      inputField.value = 'Error';
    }
  } catch (error) {
    inputField.value = 'Error';
  }
});
