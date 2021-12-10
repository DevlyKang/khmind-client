const { spawn } = require('child_process');

const list = spawn('node', ['--version']);

list.stdout.on('data', function(data) {
  console.log(`stdout: ${data}`);
});

list.stderr.on('data', function(data) {
  console.log(`stderr: ${data}`);
});

list.on('close', function(code) {
  console.log(`exited with code ${ code }`);
});
