const formUser = document.querySelector('.login-form');

formUser.addEventListener('submit', event => {
  event.preventDefault();

  const formData = {
    [formUser.elements.email.name]: formUser.elements.email.value.trim(),
    [formUser.elements.password.name]: formUser.elements.password.value.trim(),
  };
  console.log(formData);
  if (formUser.elements.email.value === '' || formUser.elements.password.value === '') {
    alert('All form fields must be filled in');
    return;
  }
  console.log(formData);

  formUser.reset();
});


