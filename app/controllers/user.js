import Ember from 'ember';

export default Ember.Controller.extend({
  planned: Ember.computed('model.user.hosted.length', function() {
    this.get('model.user.hosted').forEach(function(event) {
      if (event.occurred) {
        return true;
      }
    })
    return false;
  }),
  pastEvents: Ember.computed('model.user.hosted.length', function() {
    this.get('model.user.hosted').forEach(function(event) {
      if (!event.occurred) {
        return true;
      }
    })
    return false;
  })
});
