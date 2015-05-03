let app = require('ampersand-app');
//a "real" WebApp usually implements some kind of user-login-procedures
//in this demo a free testing JSON-service is used to create a more realistic
//example of client-server-authentication. Many examples I found usually
//fake such connections by using "setTimeout"->"send back some weird value".
//Here we communicate with a real service, send and receive real data etc.
export default class LoginService {
  constructor() {

  }
  check(userName, password) {
      let loginData = {
          user: userName,
          pwd: password
      };
      return $.ajax({
            url: app.services.login.url,
            type: app.services.login.method,
            data:JSON.stringify(loginData),
            contentType: app.services.login.contentType,
            statusCode: {
                401: function() {
                    app.user.loggedOn = false;
                    console.log('Login failed, Error 401 received!');
                }
            },
            success: function(data, status, headers) {
                console.log('Login successful');
                app.user.loggedOn = true;
                app.user.token = data;
            },
            error: function(xhr, status, error) {
                console.log(`Login failed: status > ${status}, error: ${error}`);
            }
        });

  }
}
