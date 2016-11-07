import Ember from 'ember';

export function isLoggedIn(params) {
  console.log("Host ID: " + params[0]);
  console.log("Session ID: " + params[1]);
  if(params[0] === params[1]){
    return true;
  }else {
    return false;
  }
}

export default Ember.Helper.helper(isLoggedIn);
