import Ember from 'ember';

export function isInvited(params/*, hash*/) {
  console.log("-----------------------------");
  var userId = params[0];
  var guests = params[1];
  var response = false;
  console.log("User ID: " + userId);
  console.log("PartyID: " + guests);

  guests.forEach(function(guest) {

    console.log('Guest ID: ' + guest.get('id'));
    if (guest.get('id') === userId) {
      console.log('true');
      response = true;
    } else {
      console.log('false')
    }
  })
  return response;
}

export default Ember.Helper.helper(isInvited);
