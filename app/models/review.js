import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.belongsTo('user', {async: true}),
  comment: DS.attr(),
  reviewedUser: DS.belongsTo('user', {async: true}),
  reviewedEvent: DS.belongsTo('event', {async: true}),
  rating: DS.attr(),
});
