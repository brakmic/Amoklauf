<!-- this is an example on handling forms with RiotJS -->
<contact>
<form role="form" onsubmit={ sendMessage }>
    <div class="col-lg-6">
      <div class="form-group">
        <label for="InputName">Your Name</label>
        <div class="input-group">
          <input type="text" class="form-control" name="name" id="name" placeholder="Please enter your name" required>
          <span class="input-group-addon"><i class="glyphicon glyphicon-ok form-control-feedback"></i></span></div>
      </div>
      <div class="form-group">
        <label for="InputEmail">Your Email</label>
        <div class="input-group">
          <input type="email" class="form-control" id="email" name="email" placeholder="Please enter your email" required  >
          <span class="input-group-addon"><i class="glyphicon glyphicon-ok form-control-feedback"></i></span></div>
      </div>
      <div class="form-group">
        <label for="InputMessage">Message</label>
        <div class="input-group">
          <textarea name="message" id="message" class="form-control" rows="5" required></textarea>
          <span class="input-group-addon"><i class="glyphicon glyphicon-ok form-control-feedback"></i></span></div>
      </div>
      <input type="submit" name="submit" id="submit" value="Submit" class="btn btn-info pull-right">
    </div>
  </form>
<script type="es6">
this.messagingService = this.opts.service;

this.sendMessage = (e) => {
  e.preventDefault();
  this.messagingService.send({'data':this.getFormData()})
        .done(function(response){
          alert(`Data received and filed under: ${JSON.stringify(response)}`);
        }).fail(function(error){
          alert(`Could not send your data: ${error}`);
        });
};
this.getFormData = () => {
  return {
    name: this.name.value,
    email: this.email.value,
    message: this.message.value
  }
};
</script>

</contact>