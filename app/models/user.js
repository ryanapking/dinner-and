import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  age: DS.attr(),
  zip: DS.attr(),
  about: DS.attr(),
  avatar: DS.attr(),
  //has many reviews by
  //has many reviews of
  hosted:  DS.hasMany('event', { inverse: "host", async: true }),
  invitedTo: DS.hasMany('event', { inverse: "invited", async: true }),
  attended: DS.hasMany('event', { inverse: "attended", async: true }),
  interests: DS.hasMany('interest', { async: true })
});
