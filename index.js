console.log('Before');
// Callbacks
// getUser(1, getRepositories);

PromisegetUser(1)
  .then(user => PromisegetRepositories(user.gitHubUsername))
  .then(repos => PromisegetCommits(repos[0]))
  .then(commits => console.log('Commits: ', commits))
  .catch(err => console.lgo('Error', err.message));

console.log('After');

// Callbacks
// function getUser(id, callback) {
//   setTimeout(() => {
//     console.log('Reading an user from DB...');
//     callback({ id: id, gitHubUsername: 'Ahu' });
//   }, 2000);
// }

// function getRepositories(username, callback) {
//   setTimeout(() => {
//     console.log(`Calling ${username} repositories`);
//     callback(['repo1', 'repo2', 'repo3']);
//   }, 2000);
// }

// function getRepositories(user) {
//   getRepositories(user.gitHubUsername, getCommits);
// }

// function getCommits(repos) {
//   getCommits(user.gitHubUsername, displayCommits);
// }

// function displayCommits(commits) {
//   console.log(commits);
// }

// Promises
function PromisegetUser(id) {
  return new Promise((resolve, reject) => {
    // Kick off some async work
    setTimeout(() => {
      console.log('Reading an user from DB...');
      resolve({ id: id, gitHubUsername: 'Ahu' });
    }, 2000);
  });
}

function PromisegetRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Calling ${username} repositories`);
      resolve(['repo1', 'repo2', 'repo3']);
    }, 2000);
  });
}

function PromisegetCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API...');
      resolve(['commit']);
    }, 2000);
  });
}
// Async/await
