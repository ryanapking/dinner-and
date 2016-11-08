import Ember from 'ember';

export default Ember.Controller.extend({
  currentPath: Ember.computed(function() {
    return this.get("routeName");
  })
});
