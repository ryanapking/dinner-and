import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('user');
  this.route('messages');
  this.route('events');
  this.route('eventlist');
  this.route('event');
  this.route('album');
  this.route('admin');
});

export default Router;
