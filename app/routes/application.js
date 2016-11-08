import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    snuffleLogin() {
      var currentThis = this;
      this.get('session').open('firebase', {
        provider: 'password',
        email: 'snuffle@email.com',
        password: 'snuffle'
      }).then(function() {
        currentThis.transitionTo('user', currentThis.get('session.uid'));
      });
    },
    toggleSidebar(){
      $("#sub-sidebar").sidebar('toggle');
    },
    createUser(params, email, password) {
      if (this.get('session.isAuthenticated')) {
        this.get('session').close();
      }
      var newUser = this.store.createRecord('user', params);
      var currentThis = this;
      const auth = this.get('firebaseApp').auth();

      auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
        console.log(error.message);
      }).then(function(user) {
        newUser.set('id', user.uid);
        newUser.save().then(function() {
          currentThis.get('session').open('firebase', {
            provider: 'password',
            email: email,
            password: password
          }).then(function() {
            currentThis.store.unloadAll();
            currentThis.transitionTo('users');
          });
        });
      });
    },
    loginUser(params) {
      var currentThis = this;
      this.get('session').open('firebase', {
        provider: 'password',
        email: params.email,
        password: params.password
      }).then(function() {
        currentThis.transitionTo('user', currentThis.get('session.uid'));
      });
    },
    logout() {
      var currentThis = this;
      this.get('session').close().then(function() {
        currentThis.transitionTo('index');
      });
    }
  }
});
