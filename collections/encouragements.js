Encouragements = new Meteor.Collection('encouragements');

Encouragements.allow({
  update: ownsDocument,
  remove: ownsDocument,
	insert: isUser 
});

Meteor.methods({
  encouragement: function(encouragementAttributes) {
    var user = Meteor.user();
    var prayer = Prayers.findOne(encouragementAttributes.postId);
    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, 'You need to login to submit encouragements.');
    if (!encouragementAttributes.body)
      throw new Meteor.Error(422, 'Please write some content.');
    if (!encouragementAttributes.postId)
      throw new Meteor.Error(422, 'You must write content to encourage the person.');
		
    encouragement = _.extend(_.pick(encouragementAttributes, 'postId', 'body','author','datePosted'));
    
		return Encouragements.insert(encouragement);
  }
});
