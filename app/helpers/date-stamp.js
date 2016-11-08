import Ember from 'ember';

export function dateStamp(params/*, hash*/) {
  console.log(params[0]);
  var dateStamp = new Date(params[0]);
  var yr = dateStamp.getFullYear();
  var mo = dateStamp.getMonth() + 1;
  var day = dateStamp.getDate();
  var hh = dateStamp.getHours();
  var mm = dateStamp.getMinutes();
  mm = mm < 10 ? "0" + mm : mm;
  var ampm = hh > 12 ? 'PM' : 'AM';
  hh = hh > 12 ? hh - 12 : hh;
  return Ember.String.htmlSafe(yr + '/' + mo + '/' + day + ' ' + hh + ':' + mm + ' ' + ampm);
}

export default Ember.Helper.helper(dateStamp);
