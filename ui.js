class UI {
  constructor() {
    this.profile = document.getElementById('profile'); 
  }

  profileCreatedAt(user) {
    const dt = new Date(`${user.created_at}`); 

    return dt.getDate() + ":" + (dt.getMonth() + 1) + "." + dt.getFullYear(); 
  }
    
  

  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3 shadow-lg">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2 rounded shadow-lg" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-danger btn-block my-3 font-weight-bold">
              View Profile
            </a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary mr-2">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary mr-2">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success mr-2">Followers: ${user.followers}</span>
            <span class="badge badge-info mr-2">Following: ${user.following}</span>
            <hr>
            <ul class="list-group">
              <div class="row">
                <li class="text-primary list-group-item col-md-3">Name: </li>
                <li class="text-primary list-group-item col-md-9"><b>${user.name}</b></li>
              </div>
              <div class="row">
                <li class="text-primary list-group-item col-md-3">Company: </li>
                <li class="text-primary list-group-item col-md-9"><b>${user.company}</b></li>
              </div>
              <div class="row">
                <li class="text-primary list-group-item col-md-3">Website / Blog: </li>
                <li class="text-primary list-group-item col-md-9"><b>${user.blog}</b></li>
              </div>
              <div class="row">
                <li class="text-primary list-group-item col-md-3">Location:  </li>
                <li class="text-primary list-group-item col-md-9"><b>${user.location}</b></li>
              </div>
              <div class="row">
                <li class="text-warning list-group-item col-md-3">Member since: </li>
                <li class="text-warning list-group-item col-md-9"><b>${user.created_at}</b></li>
              </div>
              <div class="row">
                <li class="text-danger list-group-item col-md-3">Last Update:  </li>
                <li class="text-danger list-group-item col-md-9"><b>${user.updated_at}</b></li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;  
  }

  // Show repos
  showRepos(repos) {
    let output = ''; 
    
    repos.forEach(function(repo) {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6 font-weight-bold">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
            <span class="badge badge-primary mr-2">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-secondary mr-2">Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-success mr-2">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `; 
    });

    // Output repos
    document.getElementById('repos').innerHTML = output; 
  }

  // show alert message 
  showAlert(message, className) {
    // Clear any remaining alerts
    this.clearAlert(); 

    // Create DIV
    const div = document.createElement('div'); 
    // Add Classes
    div.className = className; 
    // Add text
    div.appendChild(document.createTextNode(message)); 
    // Get parent
    const container = document.querySelector('.searchContainer'); 
    // Get search box
    const search = document.querySelector('.search');  
    // insert alert
    container.insertBefore(div, search); 
    // Timeout the alert
    setTimeout(() => {
      this.clearAlert(); 
    }, 3000); 

  }

  // Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector('.alert'); 

    if(currentAlert) {
      currentAlert.remove(); 
    }
  }

  // Clear profile through input
  clearProfile() {
    this.profile.innerHTML = ''; 
  }
}

//<li class="list-group-item">Company: </li><li><b>${user.company}</b></li>
//<li class="list-group-item">Website/Blog: </li><li><b>${user.blog}</b></li>
//<li class="list-group-item">Location: </li><li><b>${user.location}</b></li>
//<li class="list-group-item">Member since: </li><li><b>${user.created_at}</b></li>
//<li class="list-group-item">Last Update: </li><li><b>${user.updated_at}</b></li> 