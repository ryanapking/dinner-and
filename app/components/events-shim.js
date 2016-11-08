import Ember from 'ember';

export default Ember.Component.extend({
  lat: 45.5231,
  lng: -122.6775,
  actions: {
    mapEvent(event) {
      this.set('lat', event.get('lat'));
      this.set('lng', event.get('lng'));
    }
  }
});
