var { PythonShell } = require('python-shell');


var options = {
    scriptPath: '../',
    args: ["NAME","TOTO"],
};

PythonShell.run('python.py', options, function (err, results) {
  if (err) throw err;
  console.log('results: %j', results);
});
