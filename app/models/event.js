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
  host: DS.belongsTo('user', { inverse: "hosted", async: true }),
  invited: DS.hasMany('user', { inverse: "invitedTo", async: true }),
  attended: DS.hasMany('user', { inverse: "attended", async: true }),
  reviewsOf: DS.hasMany('review', {async: true}),

  // New Invite System
  inviteRequests: DS.hasMany('user', { inverse: "invitesRequested", async: true}),
  invitesSent: DS.hasMany('user', { inverse: "invitesReceived", async: true})
  // interests: DS.hasMany('interest', { async: true })
  //hasmany photos
  //user belongsto
  //hasmany invited
  //hasmany attended
  //hasmany interests
});
