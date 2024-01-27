const loggerThree = (request, response, next) => {
    console.log("Books");
    next();
  };
  
  module.exports = loggerThree;