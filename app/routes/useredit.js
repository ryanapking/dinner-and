import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord("user", params.user_id);
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
    }
  }
});
