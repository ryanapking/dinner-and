import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    console.log(this.get('session.uid'));
  },
  firebaseApp: Ember.inject.service(),
  actions: {
    createUser(params, email, password) {
      this.get('session').close();
      var newUser = this.store.createRecord('user', params);
      var currentThis = this;
      const auth = this.get('firebaseApp').auth();
      auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
        console.log(error.message);
      }).then(function(user) {
        newUser.set('id', user.uid);
        newUser.save();
        currentThis.get('session').open('firebase', {
          provider: 'password',
          email: email,
          password: password
        }).then(function() {
          currentThis.transitionTo('user', user.uid);
        });
      });
    },
     login: function() {
       var controller = this.get('controller');
       var email = controller.get('userEmail');
       var password = controller.get('userPassword');
         this.get('session').open('firebase', {
              provider: 'password',
              email: email,
              password: password
         }).then(function() {
            //  console.log(this.get('session.uid'));
             this.transitionTo('user', this.get('session.uid'));
         }.bind(this));
     },
     logout: function() {
         this.get('session').close().then(function() {
             this.transitionTo('application');
         }.bind(this));
     }
  }
});
