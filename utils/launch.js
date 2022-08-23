const concurrently = require('concurrently')
const path = require('path')

const { result } = concurrently(
  [
    { command: 'npm run server', name: 'json-server', prefixColor: 'blue' },
    { command: 'npm start', name: 'gateway', prefixColor: 'green' }
  ],
  {
    prefix: 'name',
    killOthers: ['failure', 'success'],
    restartTries: 3,
  }
)

result.then(() => {
  process.exit();
}, (exitInfo) => {
  console.log(exitInfo);
  // This code is necessary to make sure the parent terminates
  // when the application is closed because of a failure.
  process.exit();
})