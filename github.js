class GitHub {
  constructor() {
    this.client_id = 'd1441f81c36f8e36d4db'; 
    this.client_secret = 'db4b7cfba4bcb51c957929a94d946efe0eaf6813'; 
    this.repos_count = 10; 
    this.repos_sort = 'created: asc'; 
  }
  // GET user method
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    const profile = await profileResponse.json(); 
    const repos = await repoResponse.json(); 


    return {
      profile, // same as profile: profile
      repos    // same as repos: repos
    }
  }
}
