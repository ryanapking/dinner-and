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
        avatar: $("#avatar").val()
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

    }
  }
});
