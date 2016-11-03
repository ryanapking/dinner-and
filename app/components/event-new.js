import Ember from 'ember';

export default Ember.Component.extend({
  inNew: false,
  didRender(){
    $('#user_new_form')
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
        maxGuests: {
          identifier  : 'maxGuests',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter the maximum number of guests'
            }
          ]
        },
        address: {
          identifier  : 'address',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter an address'
            }
          ]
        },
        description: {
          identifier  : 'description',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter a descritpion'
            }
          ]
        },
      }
    });
  },
  actions:{
    createEvent(){
      var params = {
        name: $("#name").val(),
        maxGuests: $("#maxGuests").val(),
        address: $("#address").val(),
        descritpion: $("#descritpion").val(),
        host: this.get("user")
      }
      this.sendAction("createEvent", params);
    },
    toggleNew(){
      if(this.inNew){
        this.set("inNew", false);
      }else{
        this.set("inNew", true);
      }
    }
  }
});
