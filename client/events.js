import { Session } from 'meteor/session'
Template.body.events({
  "click .indicesButton": function(event, template){
    Session.set("showIndicesListSession", !Session.get("showIndicesListSession"));
  },

});
