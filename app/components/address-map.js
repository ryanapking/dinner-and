import Ember from 'ember';

export default Ember.Component.extend({
  zoom: 13,
  addressLat: 0,
  addressLng: 0,
  didRender() {
    var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + this.get('event.address');
    var _this = this;
    var location = Ember.$.getJSON(url).then(function(response) {
      var lat = response.results[0].geometry.location.lat;
      var lng = response.results[0].geometry.location.lng;
      _this.set('addressLat', lat);
      _this.set('addressLng', lng);
    });
  }
});
