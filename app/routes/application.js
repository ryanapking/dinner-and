import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    toggleSidebar(){
      console.log("in")
      $("#sub-sidebar").sidebar('toggle');
    }
  }
});
