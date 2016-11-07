import Ember from 'ember';

export default Ember.Component.extend({
  inNew: false,
  didRender(){
    $('#review_new_form')
    .form({
      on: 'blur',
      fields: {
        rating: {
          identifier  : 'rating',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter a rating'
            }
          ]
        },
      }
    });
  },
  actions:{
    toggleNew(){
      if(this.inNew){
        this.set("inNew", false);
      }else{
        this.set("inNew", true);
      }
    },
    createReview(){
      var userID = $("#user-dropdown").val();
      var params = {
        author: "",
        comment: $("#comment").val(),
        rating: $("#rating").val(),
        reviewedEvent: this.get("event")
      }
      this.sendAction("createReview", userID, params);
    }
  }
});
