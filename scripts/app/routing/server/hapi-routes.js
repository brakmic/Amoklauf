//this is the sever-router config-file for HapiJS (via hapi-router package)
module.exports = [
  {
      path: '/public/js/{files*}',
      method: 'GET',
      handler: {
        directory: {
            path: 'public/js',
            listing: false
        }
    }
  },
  {
      path: '/public/css/{files*}',
      method: 'GET',
      handler: {
        directory: {
            path: 'public/css',
            listing: false
        }
    }
  },
   {
      path: '/public/images/{files*}',
      method: 'GET',
      handler: {
        directory: {
            path: 'public/images',
            listing: false
        }
    }
  },
  {
      path: '/build/js/{files*}',
      method: 'GET',
      handler: {
        directory: {
            path: 'build/js',
            listing: false
        }
    }
  },
  {
      path: '/build/css/{files*}',
      method: 'GET',
      handler: {
        directory: {
            path: 'build/css',
            listing: false
        }
    }
  },
  {
      path: '/{p*}',
      method: 'GET',
      handler: function(request, reply) {
          reply.file('index.html');
      }
  }
];
