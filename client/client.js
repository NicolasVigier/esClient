import { Session } from 'meteor/session'
Session.setDefault("showIndicesListSession", false);

import { Template } from 'meteor/templating'
Template.body.onRendered(function (template) {
  // Use the jQuery plugin
  template.$('.dropdown-button').dropdown();
});
