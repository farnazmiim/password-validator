const {regex} = require('./constance') ;
  function passwordValidator(name,options) {
    console.log(regex.letters.test(name))
      if(options.blacklist && options.blacklist.includes(name)) {
          return {
          valid : false,
          message : 'blacklist'
        };
      }
      if(options.required && !name) {
        return {
          valid : false,
          message : 'required'
        };
      }
      if(options.max && name.length > options.max) {
           return {
          valid : false,
          message : 'max'
        };
      }
      if(options.min && name.length < options.min) {
          return {
          valid : false,
          message : 'min'
        };
      }
      if(options.lowerCase && name == name.toLowerCase()){
        return {
          valid : false,
          message : 'lowerCase'
        };
      }
       if(options.upperCase && name == name.toUpperCase()){
       return {
          valid : false,
          message : 'upperCase'
        };
      }
      if(options.digits && !regex.digits.test(name)){
        return {
          valid : false,
          message : 'digits'
        };
      }
     if(options.symbols && !regex.symbols.test(name)){
        return {
          valid : false,
          message : 'symbols'
        };
      }
      if(options.spaces && !regex.spaces.test(name)){
        return {
          valid : false,
          message : 'spaces'
        };
      }
       if(options.letters && regex.letters.test(name)){
        return {
          valid : false,
          message : 'letters'
        };
      }
        return {
          valid :true,
          message : ''
        };
  }

  module.exports = passwordValidator

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  