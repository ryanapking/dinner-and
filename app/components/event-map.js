import Ember from 'ember';

export default Ember.Component.extend({
  zoom: 13,
  sortedByZip: Ember.A(),
  willRender() {
    var events = this.get('events');
    var zipcodes = Ember.A();
    events.forEach(function(event) {
      var eventZip = event.get('zip');
      var found = false;

      zipcodes.forEach(function(zipcode) {
        zipcode.events.forEach(function(zipcodeEvent) {
          var currentZip = zipcodeEvent.get('zip');
          if (currentZip === eventZip) {
            found = true;
            zipcode.events.pushObject(event);
          }
        })
      });

      if (!found) {
        var lat = event.get('lat');
        var lng = event.get('lng');
        var newObject = {"lat": lat, "lng": lng, "events": Ember.A()};
        newObject.events.pushObject(event);
        zipcodes.pushObject(newObject);
      }
    })
    this.set('sortedByZip', zipcodes);
  }
});
