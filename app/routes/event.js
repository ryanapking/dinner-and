import Ember from 'ember';

export default Ember.Route.extend({
  addAttended: [],
  model(params){
    return Ember.RSVP.hash({
      event: this.store.findRecord("event", params.event_id, { reload: true}),

      users: this.store.findAll('user'),
    });
  },
  actions:{

    addInvited(event){
      var userID = $("#user-dropdown").val();
      var storage = this.store;

      storage.findRecord("user", userID).then(function(response) {
        response.get('invitedTo').addObject(event);
        event.get('invited').addObject(response);
        event.get('inviteRequests').removeObject(response);
        response.get('invitesRequested').removeObject(event);
        response.save().then(function() {
          return event.save();
        })
      })
    },
    sendInvite(event){
      var userID = $("#invite-send").val();
      var storage = this.store;

      storage.findRecord("user", userID).then(function(response) {
        response.get('invitesReceived').addObject(event);
        event.get("invitesSent").addObject(response);
        response.save().then(function() {
          return event.save();
        })
      })
    },
    requestInvite(event){
      // var event = this.get("model.event");
      var userID = $("#invite-request").val();
      console.log(event.get("name"));
      console.log(userID);

      var storage = this.store;

      storage.findRecord("user", userID).then(function(response) {
        response.get('invitesRequested').addObject(event);
        event.get('inviteRequests').addObject(response);

        response.save().then(function() {
          return event.save();
        })
      })
    },
    eventOccurred(event){
      console.log(this.addAttended);
      event.occurred = true;
      this.addAttended.forEach(function(user) {
        event.get("attended").addObject(user);

        user.get("attended").then(function(response) {
          response.addObject(event);
          response.save();
          event.save();
        })
      })
    },
    togglebutton(_invited, _invitedID){
      //
      if(!($("#" + _invitedID).hasClass("basic"))){
        $("#" + _invitedID).addClass("basic");
        this.addAttended.splice(this.addAttended.indexOf(_invited),1);
      } else {
        this.addAttended.push(_invited);
        console.log(this.addAttended);
        $("#" + _invitedID).removeClass("basic");
      }
    },
    createReview(_userID, _params){
      var storage = this.store;
      var event = _params.reviewedEvent;

      storage.findRecord("user", _userID).then(function(response){
        _params.author = response;
        var newReview = storage.createRecord('review', _params);
        response.get("reviewsMade").addObject(newReview);
        event.get("reviewsOf").addObject(newReview);

        newReview.save().then(function(){
          event.save();
          return response.save();
        })
      })
    },
  }
});
