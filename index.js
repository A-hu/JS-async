console.log('Before');
// Callbacks
getUser(1, getRepositories);
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

function getRepositories(user) {
  getRepositories(user.gitHubUsername, getCommits);
}

function getCommits(repos) {
  getCommits(user.gitHubUsername, displayCommits);
}

function displayCommits(commits) {
  console.log(commits);
}
