import Ember from 'ember';
Ember.inject.service('store');

export default Ember.Component.extend({
  actions:{
    updateInterest(){
      var userID = $("#user-dropdown").val();
      var interestID = $("#interest-dropdown").val();
      this.get("users").forEach(function(user) {
        console.log(user.get("name"));
      })

      this.sendAction("updateInterest", userID, interestID);
    }
  }
});
