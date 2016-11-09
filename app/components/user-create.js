import Ember from 'ember';

export default Ember.Component.extend({
  showCreate: false,
  didRender(){
    $('#user_create_form')
    .form({
      on: 'blur',
      fields: {
        name: {
          identifier  : 'name',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter a name'
            }
          ]
        },
        email: {
          identifier  : 'email',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter an email address'
            }
          ]
        },
        password: {
          identifier  : 'password',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter a password'
            }
          ]
        },
        age: {
          identifier  : 'age',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter a number'
            }
          ]
        },
        zip: {
          identifier  : 'zip',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter a zip code'
            }
          ]
        },
        about: {
          identifier  : 'about',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please tell us something about yourself'
            }
          ]
        },
        avatar: {
          identifier  : 'avatar',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter an image URL'
            }
          ]
        },
      }
    });
  },
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
    },
    showCreate() {
      this.set('showCreate', true);
    }
  }
});
