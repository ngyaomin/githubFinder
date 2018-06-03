// search input

const searchUser = document.getElementById('searchUser');

// Search input event listener

searchUser.addEventListener('Keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if(userText !== ''){
    console.log(userText);
  }
});
