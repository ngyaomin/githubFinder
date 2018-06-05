class Github {
  constructor() {
    // the client id and secret will be reset soon, so pls clone this repository
    // and create your own oauth app on github and fill in your own id and secret
    // below id and secret is only use for testing purposes
    // for best pratices the id and secret should be on a .gitignore file
    // but since this is not for production, its ok
    this.client_id = 'ce0e9fa370e5e4281f8e'
    this.client_secret = 'd342e5bc9a62a3e1f5632b46684cb6326bd74c4c'
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch
    (`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch
    (`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}
