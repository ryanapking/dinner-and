import Ember from 'ember';

export default Ember.Component.extend({
  displayUserEdit: false,
  actions: {
    showUserEdit: function() {
      this.set('displayUserEdit', true);
    },
    updateUser: function(user) {
      var params = {
        name: this.get('name_edit'),
        age: this.get('age_edit'),
        zip: this.get('zip_edit'),
        about: this.get('about_edit'),
        avatar: this.get('avatar_edit')
      };
      this.set('displayUserEdit', false);
      this.sendAction('updateUser', user, params);
    }
  }
});
