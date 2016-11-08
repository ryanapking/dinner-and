import Ember from 'ember';

export default Ember.Component.extend({
  addInterests:[],
  removeInterests:[],
  didRender(){
    this.set("addInterests", []);
    this.set("removeInterests", []);


    var userInterests= this.get("user.interests");
    var storage = this;

    this.get("interests").forEach(function(interest) {

      if(userInterests.indexOf(interest) !== -1){
        $("#" + interest.id).removeClass("basic").addClass("blue");
      }
    })

    userInterests.forEach(function(interest) {
      storage.addInterests.push(interest);
    });
  },
  actions:{
    addInterests(_userID){
      this.sendAction("addInterests", _userID, this.addInterests, this.removeInterests);
    },
    togglebutton(_interest, _interestID){
      var userInterests= this.get("user.interests");

      //if neutral
      if($("#" + _interestID).hasClass("basic")){
        $("#" + _interestID).removeClass("basic").addClass("blue");
        this.addInterests.push(_interest);
      //else if non-neutral
      } else{
        if($("#" + _interestID).hasClass("blue")){
          //if blue and in database
          if(userInterests.indexOf(_interest) !== -1){
            $("#" + _interestID).removeClass("blue").addClass("red");
            this.removeInterests.push(_interest);
          //else blue and not in database
          }else{
            $("#" + _interestID).removeClass("blue").addClass("basic");
          }
          this.addInterests.splice(this.addInterests.indexOf(_interest,1));
        //red and in database
        }else{
          $("#" + _interestID).removeClass("red").addClass("blue");
          this.addInterests.push(_interest);
          this.removeInterests.splice(this.removeInterests.indexOf(_interest),1);
        }
      }
      console.log(this.addInterests);
      console.log(this.removeInterests);

    }
  }
});
