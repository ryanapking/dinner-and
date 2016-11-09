import Ember from 'ember';

export default Ember.Component.extend({
  displayUserEdit: false,
  didRender(){
    $('#user_edit_form')
    .form({
      on: 'blur',
      fields: {
        name_edit: {
          identifier  : 'name_edit',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter a name'
            }
          ]
        },
        age_edit: {
          identifier  : 'age_edit',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter a number'
            }
          ]
        },
        zip_edit: {
          identifier  : 'zip_edit',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter a zip code'
            }
          ]
        },
        about_edit: {
          identifier  : 'about_edit',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please tell us something about you'
            }
          ]
        },
        avatar_edit: {
          identifier  : 'avatar_edit',
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
    },
    addInterests(userID, addInterests, removeInterests){
      console.log("user-edit")
      this.sendAction("addInterests", userID, addInterests, removeInterests);
    }
  }
});
