const passwordValidator = require('./index');

console.log(passwordValidator('hhh2h',{max : 5,digits: true,letters : true,}))