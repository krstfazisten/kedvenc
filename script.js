document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('dataForm');
    if (form) {
      form.addEventListener('submit', function(e) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
  
        if (name === '' || email === '') {
          e.preventDefault();
          alert('Please fill in all required fields.');
          return;
        }
      });
    }
  });

  document.querySelectorAll('.number-chooser .minus').forEach(button => {
    button.addEventListener('click', () => {
        const input = button.nextElementSibling;
        let value = parseInt(input.value);
        const min = parseInt(input.min);
        if (value > min) {
            input.value = value - 1;
        }
    });
});

document.querySelectorAll('.number-chooser .plus').forEach(button => {
    button.addEventListener('click', () => {
        const input = button.previousElementSibling;
        let value = parseInt(input.value);
        input.value = value + 1;
    });
});
document.querySelectorAll('.purchase').forEach(button => {
button.addEventListener('click', () => {
    window.location.href = 'purchase.html';
});
});