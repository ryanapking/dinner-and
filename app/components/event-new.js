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
        zip: {
          identifier  : 'zip',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter a zip code'
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
        date: {
          identifier: 'date',
          rules: [
            {
              type  : 'empty',
              prompt: 'Please enter a date'
            }
          ]
        },
        time: {
          identifier: 'time',
          rules: [
            {
              type    : 'empty',
              prompt  : 'Please enter a time'
            }
          ]
        },
        image: {
          identifier  : 'image',
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
  actions:{
    createEvent(){
      console.log(this.get("user"));
      var date = $("#date").val();
      var time = $("#time").val();
      var newDate = new Date(date + " " + time);
      var dateTime = Date.parse(newDate);
      var params = {
        name: $("#name").val(),
        maxGuests: $("#maxGuests").val(),
        address: $("#address").val(),
        zip: $("#zip").val(),
        description: $("#description").val(),
        ratings: [],
        date: dateTime,
        image: $("#image").val(),
        occurred: false,
        host: this.get("user")
      }
      this.set("inNew", false);
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
