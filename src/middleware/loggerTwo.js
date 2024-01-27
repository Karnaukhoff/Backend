const loggerTwo = (request, response, next) => {
    console.log("Users");
    next();
  };
  
  module.exports = loggerTwo;