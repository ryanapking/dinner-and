import Ember from 'ember';

export default Ember.Component.extend({
  showLogin: false,
  actions: {
    loginUser() {
      var params = {
        email: this.get('userEmail'),
        password: this.get('userPassword')
      };
      this.sendAction('loginUser', params);
    },
    showLogin() {
      this.set('showLogin', true);
    }
  }
});
