// check that the userId specified owns the documents
ownsDocument = function(userId, doc) {
  return doc && doc.author === Meteor.user().profile.name;
}

isUser = function () {
	 var user = Meteor.user();
	return user
}