import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    toggleSidebar(){
      $("#sub-sidebar").sidebar('toggle');
    }
  }
});
