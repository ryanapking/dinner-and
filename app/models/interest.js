import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  mature: DS.attr(),
  user: DS.belongsTo('user', { async: true }),
});
