const register = async (event) => {
  event.preventDefault();

  const username = event.target.username.value;
  const email = event.target.email.value;
  const password = event.target.password.value;

  try {
    await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
        carbonFootInfos: [],
      }),
    });
    Swal.fire({
      text: 'Your registration is completed!',
      icon: 'success',
      timer: 3000,
    });
  } catch (error) {
    console.log('register error');
  }
};

const login = async (event) => {
  event.preventDefault();

  const username = event.target.username.value;
  const password = event.target.password.value;
  let currentUser = null;

  try {
    const response = await fetch('http://localhost:3000/users');
    const users = await response.json();

    console.log(users);

    users.forEach((user) => {
      if (user.username === username && user.password === password) {
        currentUser = user;
      }
    });

    console.log(currentUser);

    if (currentUser) {
      console.log('login basarili');
      localStorage.setItem('user', JSON.stringify(currentUser));
    } else {
      console.log('Cred yanlis');
    }
  } catch (error) {
    console.log('register error');
  }
};
