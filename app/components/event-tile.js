import Ember from 'ember';

export default Ember.Component.extend({
  userRoute: "",
  didRender(){
    this.set("userRoute", "/user/" + this.get("event.host.id"));
  },
  actions: {
    mapEvent(event) {
      this.sendAction('mapEvent', event);
    }
  }
});
