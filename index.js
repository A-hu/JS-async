console.log('Before');
const user = getUser(1);
console.log(user); // undefined
console.log('After');

// Callbacks
// Promises
// Async/await

function getUser(id){
  setTimeout(() => {
    console.log('Reading an user from DB...');
    return { id: id, gitHubUsername: 'Ahu' };
  }, 2000);
}
