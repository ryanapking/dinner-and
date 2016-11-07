import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return Ember.RSVP.hash({
      event: this.store.findRecord("event", params.event_id),
      users: this.store.findAll('user')
      });
  },
  actions:{
    addInvited(event){
      // var event = this.get("model.event");
      var userID = $("#user-dropdown").val();
      console.log(event.get("name"));
      console.log(userID);

      var storage = this.store;

      storage.findRecord("user", userID).then(function(response) {
        response.get('invitedTo').addObject(event);
        event.get('invited').addObject(response);

        response.save().then(function() {
          return event.save();
        })
      })
    }
  }
});
