// Init Class Github
const github = new GitHub; 
// Init class UI
const ui = new UI; 

// SearchInput
const searchUser = document.getElementById('searchUser'); 
// SeachInput Even Listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value; 
  
  if(userText !== ''){
    // make http call
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === 'Not Found') {
          // Show alert
          ui.showAlert('User not found', 'alert alert-danger font-weight-bold'); 
        } else {
          // Show profile
          ui.showProfile(data.profile); 
          ui.showRepos(data.repos); 
        }
      }) 
  } else {
    // Clear profile
    ui.clearProfile(); 
  }
})