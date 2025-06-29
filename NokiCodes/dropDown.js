document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.getElementById('myDropdown');
    const storedValue = localStorage.getItem('selectedOption');

    if (storedValue) {
      for (let i = 0; i < dropdown.options.length; i++) {
        if (dropdown.options[i].value === storedValue) {
          dropdown.options[i].selected = true;
          break;
        }
      }
    }

    dropdown.addEventListener('change', function() {
      localStorage.setItem('selectedOption', this.value);
    });
  });
