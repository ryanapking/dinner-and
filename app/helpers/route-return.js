import Ember from 'ember';

export function routeReturn(params/*, hash*/) {
  if(params[0] === "index"){
    return true;
  }else {
    return false;
  }
}

export default Ember.Helper.helper(routeReturn);
