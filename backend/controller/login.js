var user = require("../models/User");
var jwt = require("jsonwebtoken"); //to create token(encrypted string) for authentication
var Response = require("../models/response");
var response = new Response();
const bcrypt = require('bcryptjs');


module.exports.login = (credentials, res) => {
  console.log(credentials);
  user.findOne((err, result) => {
    console.log(result);
    let token = { user: null };
    let error = true;
    if (!error) {
      if (result) {
        token.user = result;
        error = false;
      }
      response.setSuccessResponse(
        
        { accessToken: jwt.sign(token, "secret") },//decrypt
        "Login Successful!"
      );
      console.log(response.state);
      console.log(response);
      res.send(response.state);
    }
  });
};