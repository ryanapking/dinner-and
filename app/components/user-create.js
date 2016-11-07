import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createUser() {
      var params = {
        name: this.get('name'),
        age: this.get('age'),
        zip: this.get('zip'),
        about: this.get('about'),
        avatar: this.get('avatar'),
      };
      var email = this.get('email');
      var password = this.get('password');
      this.sendAction('createUser', params, email, password);
    }
  }
});
