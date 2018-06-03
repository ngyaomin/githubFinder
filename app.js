// init GitHub
const github = new Github;

// search input

const searchUser = document.getElementById('searchUser');

// Search input event listener

searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if(userText !== ''){
    //make http call
    github.getUser(userText)
      .then(data => {
        console.log(data);
      })
  }
});
