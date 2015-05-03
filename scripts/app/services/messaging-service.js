let app = require('ampersand-app');
//a simple message-service
export default class MessagingService {
  constructor() {

  }
  send(payload) {
      return $.ajax({
            url: app.services.messaging.url,
            type: app.services.messaging.method,
            data:JSON.stringify(payload),
            contentType: app.services.messaging.contentType,
            statusCode: {
                401: function() {
                    console.log('Could not send the message!');
                }
            },
            success: function(data, status, headers) {
                return data;
            },
            error: function(xhr, status, error) {
                return error;
            }
        });

  }
}
