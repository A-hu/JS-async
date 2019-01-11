console.log('Before');
// Callbacks
getUser(1, (user) => {
  console.log('User', user);

  getRepositories(user.gitHubUsername, (repos) => {
    console.log('Repos', repos);
  });
});
console.log('After');

// Promises
// Async/await

function getUser(id, callback) {
  setTimeout(() => {
    console.log('Reading an user from DB...');
    callback({ id: id, gitHubUsername: 'Ahu' });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log(`Calling ${username} repositories`);
    callback(['repo1', 'repo2', 'repo3']);
  }, 2000);
}
