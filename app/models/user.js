import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  age: DS.attr(),
  zip: DS.attr(),
  about: DS.attr(),
  avatar: DS.attr(),
  //has many reviews by
  //has many reviews of
  //has many events hosted
  //has many events planned
  //has many events attended
  // interests: DS.hasMany('interest', { async: true })
});
