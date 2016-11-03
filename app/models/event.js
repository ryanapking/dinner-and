import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  maxGuests: DS.attr(),
  zip: DS.attr(),
  address: DS.attr(),
  description: DS.attr(),
  rating: DS.attr(),
  host: DS.belongsTo('user', { async: true }),
  // interests: DS.hasMany('interest', { async: true })
  //hasmany photos
  //user belongsto
  //hasmany invited
  //hasmany attended
  //hasmany interests
});
