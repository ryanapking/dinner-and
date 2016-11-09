import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  maxGuests: DS.attr(),
  zip: DS.attr(),
  lat: DS.attr(),
  lng: DS.attr(),
  address: DS.attr(),
  description: DS.attr(),
  ratings: DS.attr(),
  occurred: DS.attr(),
  image: DS.attr(),
  date: DS.attr(),
  host: DS.belongsTo('user', { inverse: "hosted", async: true }),
  // Confirmed Guest
  invited: DS.hasMany('user', { inverse: "invitedTo", async: true }),
  attended: DS.hasMany('user', { inverse: "attended", async: true }),
  reviewsOf: DS.hasMany('review', {async: true}),
  // Requests to join events from host
  inviteRequests: DS.hasMany('user', { inverse: "invitesRequested", async: true}),
  // Requests to join events from user
  invitesSent: DS.hasMany('user', { inverse: "invitesReceived", async: true})
});
