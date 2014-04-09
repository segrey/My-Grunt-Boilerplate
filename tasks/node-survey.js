module.exports = function(grunt) {
  grunt.registerTask('node survey', 'Say hello!', function() {
    askQuestion(this.async());
  });
};

function askQuestion(done) {
  var readline = require('readline');

  process.stdin.resume();
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('What do you think of node.js? ', function(answer) {
    console.log('Thank you for your valuable feedback:', answer);
    rl.close();
    done();
  });
}
