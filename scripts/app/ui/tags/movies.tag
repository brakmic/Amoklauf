<movies>
<div class="container-fluid riot-style">
  <h2 class="list-title">{ title }</h3>
  <div>
    <ul>
      <li each={ list }>
      <h3 class="entry-title">{ title }</h3>
      <div>
          <img src={ poster }>
        </div>
      <h4 class="entry-subtext">{ synopsis }</h4>
      <div>
        <h4>Starring:</h4>
        <ul> <!-- it seems RiotJS can't handle derived properties from AmpersandJS models -->
          <!-- therefore we use a much uglier syntax to get actor's full name -->
          <!-- I'll investigate this issue (almost sure the problem is not with Riot but with my buggy code) -->
          <li class="actor-info" each={ stars }><span>{ firstName + ' ' + lastName }</span></li>
        </ul>
      </div>
        <a class="entry" onclick={ parent.remove }>Remove</a>
      </li>
    </ul>
  </div>
  </div>
  <style scoped>
    .entry {
      color: blue;
    }
    .list-title {
      background-color: white;
      color: red;
      text-align: center;
    }
    .entry-title {
      background-color: gray;
      color: white;
      text-align: center;
    }
    .entry-subtext {
      font-family: Alike;
      color: #C92B2B;
      font-size: 26;
      padding: 10;
      font-weight: bold;
      text-shadow: 1px 1px 1px #A1A1A1;
    }
    .images {
      position: relative;
      display: block;
      padding-left: 10em;
    }
    .actor-info {
      font-weight: bold;
    }
    ul {
      list-style-type: none;
    }
    .riot-style {
      position:relative;
      left:40%;
      top:0px;
      height:100%;
      font-family: Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif
    }
  </style>
  <script type="es6">
  let self    = this;
  self.list = [];
  self.title = this.opts.title;


  this.remove = (e) => {
     let item = e.item;
     let index = self.list.indexOf(item);
     RiotControl.trigger('remove_movie', index);
   };

   RiotControl.on('movie_list_changed', function(movies) {
      self.list = movies;
      self.update();
   });

   self.on('mount', function(eventName) {
      RiotControl.trigger('get_movie_list', function(movies){
        self.list = movies;
        self.update();
     });
   });

  </script>
</movies>