import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      users: this.store.findAll('user'),
      interests: this.store.findAll('interest')
    });
  },

  actions: {
    createUser(){
      var params = {
        name: $("#name").val(),
        age: parseInt($("#age").val()),
        zip: parseInt($("#zip").val()),
        about: $("#about").val(),
        avatar: $("#avatar").val(),
      };
      var newUser = this.store.createRecord('user', params);
      newUser.save();
    },

    createInterest(){
      var mature;

      if($("#mature").val() === "True"){
        mature = true;
      } else {
        mature = false;
      }
      var params = {
        name: $("#i-name").val(),
        mature: mature
      };
      var newInterest = this.store.createRecord('interest', params);
      newInterest.save();
    },

    updateInterest(userID, interestID){
      var storage = this.store;
      var user;
      var interest;

      storage.findRecord("user", userID).then(function(response) {
        user = response;
      }).then(function() {
        storage.findRecord("interest", interestID).then(function(response) {
          interest = response;
        }).then(function() {
          user.get('interests').addObject(interest);
          interest.get('users').addObject(user);
          user.save().then(function() {
            return interest.save();
          })
        })
      })
    },
    createIndex(users){
      var index = [];
      users.forEach(function(user) {
        var params = {
          name: user.get("name"),
          id: user.id
        };
        index.push(params);
      })
      var params = {
        index: index
      }
      var newCatalog = this.store.createRecord("catalog", params);
      newCatalog.save();
      // console.log(params);
    },
    fetchIndex(){
      this.store.findRecord("catalog", "-KW9SnSu7nqs8faubIAO").then(function(response) {
        console.log(response.get("index"))
      });

    }

  }
});
