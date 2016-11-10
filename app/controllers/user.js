import Ember from 'ember';

export default Ember.Controller.extend({
  planned: Ember.computed('model.user.hosted.length', function() {
    var confirm = false;
    this.get('model.user.hosted').forEach(function(event) {
      if (!event.occurred) {
        confirm = true;
      }
    })
    return confirm;
  }),
  pastEvents: Ember.computed('model.user.hosted.length', function() {
    var confirm = false;

    this.get('model.user.hosted').forEach(function(event) {
      if(event.occurred) {

        confirm = true;
      }
    })
    return confirm;
  })
});
