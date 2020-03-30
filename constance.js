
const options = {
    upperCase:true,
    max:8,
    min:4,
    required : true,
    lowerCase : true,
    letters: true,
    digits: true,
    symbols : true,
    spaces :true,
    blacklist : ['Password','Email','Felan','Bahman']
  };

  const regex  = {
    digits : /\d+/,
    symbols : /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/,
    spaces :  /[\s]+/,
    letters : /^[a-zA-Z]+$/
  }

  module.exports = {regex}