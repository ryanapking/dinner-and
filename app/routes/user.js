import Ember from 'ember';

export default Ember.Route.extend({
  currentPath: "",
  afterModel(){
    this.set("currentPath", "test");
    // console.log(this.get("routeName"));
  },
  addInterests:[],
  model(params){
    return Ember.RSVP.hash({
      user: this.store.findRecord('user', params.user_id),
      interests: this.store.findAll('interest')
    });
  },
  actions:{

    acceptInvite(user){
      var eventID = $("#user-dropdown").val();
      console.log($("#user-dropdown").val());
      var storage = this.store;
      var catcher = storage.findRecord("event", eventID);
      console.log(user)

      storage.findRecord("event", eventID).then(function(response) {
        console.log(">");
        response.get('invited').addObject(user);
        console.log(">>");
        user.get('invitedTo').addObject(response);
        console.log(">>>");
        user.get('invitesReceived').removeObject(response);
        console.log(">>>>");
        response.get('invitesSent').removeObject(user);
        // console.log(response.toJSON())
        response.save().then(function() {
          console.log(">>>>>");
          return user.save();
        })
      })
    },
    createEvent(params){
      var newEvent = this.store.createRecord('event', params);
      var user = params.host;
      console.log(newEvent);
      user.get('hosted').addObject(newEvent);
      var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + params.zip;
      var location = Ember.$.getJSON(url).then(function(response) {
        newEvent.set('lat', response.results[0].geometry.location.lat);
        newEvent.set('lng', response.results[0].geometry.location.lng);
        newEvent.save();
        this.transitionTo('/user/' + user.id, user);
      });
      // newEvent.save().then(function() {
      //   return user.save();
      // });
    },
    addInterests(_userID){
      var storage = this.store;

      var user;
      var toAdd = this.addInterests;

      storage.findRecord("user", _userID).then(function(response) {
        user = response;
      }).then(function() {
        toAdd.forEach(function(interest) {
          interest.get("users").addObject(user);
          user.get("interests").addObject(interest);
        })
      }).then(function() {
        user.save().then(function() {
          toAdd.forEach(function(interest) {
            interest.save();
          });
        })
      })
    },
    togglebutton(_interest, _interestID){
      if(!($("#" + _interestID).hasClass("basic"))){
        $("#" + _interestID).addClass("basic");
        this.addInterests.splice(this.addInterests.indexOf(_interest),1);
      } else {
        this.addInterests.push(_interest);
        console.log(this.addInterests);
        $("#" + _interestID).removeClass("basic");
      }
    },
    testFunc(){
      this.set("currentPath", "test");
      console.log(this.get(this.currentPath));
    }
  }
});
