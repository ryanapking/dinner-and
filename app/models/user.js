import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  age: DS.attr(),
  zip: DS.attr(),
  about: DS.attr(),
  avatar: DS.attr(),
  //has many reviews by
  reviewsMade: DS.hasMany('review', { inverse: "author", async: true}),
  //has many reviews of
  reviewsOf: DS.hasMany('review', {inverse: "reviewedUser", async: true}),
  hosted:  DS.hasMany('event', { inverse: "host", async: true }),
  invitedTo: DS.hasMany('event', { inverse: "invited", async: true }),
  attended: DS.hasMany('event', { inverse: "attended", async: true }),
  interests: DS.hasMany('interest', { async: true }),
  requestInvites: DS.hasMany('event', { inverse: "inviteRequests", async: true})

});
