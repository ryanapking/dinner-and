import Ember from 'ember';

export default Ember.Route.extend({
  addInterests:[],
  model(params){
    return Ember.RSVP.hash({
      user: this.store.findRecord('user', params.user_id),
      interests: this.store.findAll('interest')
    });
  }
  actions:{
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
    togglebutton(_interest, _interestID, _userID){
      if(!($("#" + _interestID).hasClass("basic"))){
        $("#" + _interestID).addClass("basic");
        this.addInterests.splice(this.addInterests.indexOf(_interest),1);
      } else {
        this.addInterests.push(_interest);
        console.log(this.addInterests);
        $("#" + _interestID).removeClass("basic");
      }
    }
  }
});
