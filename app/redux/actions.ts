export const Actions = {
  authenticateUser: {
    type: 'AUTHENTICATE_USER',
    execute: function (store, email, password){
      var fireBaseInfo = new Firebase("https://e3education.firebaseio.com/");
      fireBaseInfo.authWithPassword({
        email    : email,
        password : password
      }, function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          //inject this info as a service
          console.log("Authenticated successfully with payload:", authData);
          console.log(authData.password.email)

        }
      });
    }

  }

}
