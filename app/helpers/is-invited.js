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
  // user.forEach(function(instance) {
  //   instance.get('name');
  //   console.log("The Hell: " + instance.get('name'));
  //   console.log(partyId);
  //   if(instance.get('name') === partyId){
  //     console.log("Success");
  //     return false;
  //   }
  // })

  // return user.get('invitedTo').then(function(parties) {
  //   return "it returned here!";
  //   parties.forEach(function(party) {
  //     return "why not";
  //     if (party.get('id') === partyId) {
  //       return "yep"
  //     }
  //   })
  // });

  // user.get('invitedTo').then(function(response){
  //   return response;
  // })
  // if (user.get('invitedTo').includes(partyId)) {
  //   return "HEY";
  //   // return true;
  // } else {
  //   return false;
  // }
}

export default Ember.Helper.helper(isInvited);
