import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  mature: DS.attr(),
  users: DS.hasMany('user', { async: true })
});
