const btnAddContact = document.getElementById('btn-add-contact');

btnAddContact.addEventListener('click', async () => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  try {
    await fetch('http://localhost:3000/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone, message }),
    });

    Swal.fire({
      text: 'Your message is sent!',
      icon: 'success',
      timer: 3000,
    });
  } catch (error) {
    console.log('addContact error');
  }
});
