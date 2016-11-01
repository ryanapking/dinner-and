import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll("user");
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
      console.log(params)
      var newUser = this.store.createRecord('user', params);
      newUser.save();
    }
  }
});
