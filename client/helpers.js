import { Session } from 'meteor/session'
Template.body.helpers({
  showIndicesList: function () {
    return Session.get("showIndicesListSession");
  }
});
