function generateInputFields(numFields) {
    const Container = document.getElementById('inputContainer');
    Container.innerHTML = '';

    for (let i = 1; i <= numFields; i++) {
      const input = document.createElement('input');
      input.type = 'text';
      input.name = 'field' + i;
      input.placeholder = 'Field ' + i;
      Container.appendChild(input);
    }
  }
  function validateForm(event) {
    event.preventDefault();
  }
  