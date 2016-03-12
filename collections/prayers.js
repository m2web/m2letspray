Prayers = new Meteor.Collection('prayers');

Prayers.allow({
  update: ownsDocument,
  remove: ownsDocument,
	insert: isUser //function(){return "true" == "true";}
});

Prayers.deny({
  update: function(userId, prayer, fieldNames) {
    // may only edit the following fields:
    return (_.without(fieldNames, 'request').length > 0);
  }
});

Meteor.methods({
  prayer: function(prayerAttributes) {
    var user = Meteor.user();
    
    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to post new requests");
		
		// ensure the post has a request
    if (prayerAttributes.request.length == 0)
			throw new Meteor.Error(422, 'Please fill in a request');
		
  },
  sendEmail: function (requestor) {
    check([requestor], [String]);
		
    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();
	
		var toAddresses = new Array("m2web@yahoo.com");
		var fromEmail = "msquaredwebsvc@gmail.com";
		
		Email.send({
			from: fromEmail,
			to: toAddresses,
			//bcc: bccEmail,
			replyTo: fromEmail || undefined,
			subject: "Prayer Page Update",
			text: requestor + " has added or edited a prayer request. Go to: http://m2letspray.herokuapps.com to see the item for which to pray."
			});
		}
});
