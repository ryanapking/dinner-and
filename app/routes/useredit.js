import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return Ember.RSVP.hash({
      user: this.store.findRecord('user', params.user_id),
      interests: this.store.findAll('interest')
    });
  },
  actions:{
    updateUser(user, params) {
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined){
          user.set(key,params[key]);
        }
      });
      user.save();
      console.log(user.id)
      this.transitionTo('user', user.id);
    },
    addInterests(_userID, _addInterests, _removeInterests){
      var page = this;
      var storage = this.store;
      var user;
      var toAdd = _addInterests;
      var toRemove = _removeInterests;

      storage.findRecord("user", _userID).then(function(response) {
        user = response;
      }).then(function() {
        toAdd.forEach(function(interest) {
          interest.get("users").addObject(user);
          user.get("interests").addObject(interest);
        })
        toRemove.forEach(function(interest) {
          interest.get("users").removeObject(user);
          user.get("interests").removeObject(interest);
        })
      }).then(function() {
        user.save().then(function() {
          toAdd.forEach(function(interest) {
            interest.save();
          });
        })
      }).then(function() {
        page.transitionTo('user', _userID);
      })
    },
  }
});
