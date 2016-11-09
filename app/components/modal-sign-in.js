import Ember from 'ember';

export default Ember.Component.extend({
  didRender(){
    console.log("didRender")
    // $('#test').modal("set active");
  },
  actions:{
    testFunc() {
      console.log("testFunc")
      $('#test').modal('show'); //pops up modal
    }
  }
});
