document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('dataForm');
  if (form) {
    form.addEventListener('submit', function (e) {
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

    open('purchase.html', '_self');
  });

  button.style.overflow = 'hidden';

  button.addEventListener('mouseenter', () => {
    let overlay = button.querySelector('.overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'overlay';
      overlay.style.borderRadius = '60% 60% 0 0';
      overlay.style.position = 'absolute';
      overlay.style.bottom = '0';
      overlay.style.left = '0';
      overlay.style.width = '100%';
      overlay.style.height = '0%'; 
      overlay.style.backgroundColor = 'white';
      overlay.style.zIndex = '1';
      button.appendChild(overlay);
    }

    overlay.animate(
      [
        { height: '0%' },
        { height: '150%' }
      ],
      {
        duration: 300,
        easing: 'ease-in',
        fill: 'forwards'
      }
    );
  });

  button.addEventListener('mouseleave', () => {
    let overlay = button.querySelector('.overlay');
    if (overlay) {
      overlay.animate(
        [
          { height: '150%' },
          { height: '0%' }
        ],
        {
          duration: 300,
          easing: 'ease-out',
          fill: 'forwards'
        }
      ).onfinish = () => {
        overlay.remove();
      };
    }
  });
});

document.querySelectorAll('.purchase').forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.style.overflow = 'hidden';
    button.animate(
      [
        { color: 'white' },
        { color: 'black' }
      ],
      {
        duration: 450,
        fill: 'forwards',
      }
    );
  });

  button.addEventListener('mouseleave', () => {
    button.animate(
      [
        { color: 'black' },
        { color: 'white' }
      ],
      {
        duration: 450,
        fill: 'forwards',
      }
    );
  });
});