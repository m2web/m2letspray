Meteor.publish('prayers', function(limit) {
  return Prayers.find({}, {sort: {datePosted: -1}});
});

Meteor.publish('encouragements', function(limit) {
  return Encouragements.find({}, {sort: {datePosted: -1}});
});

Meteor.publish('thisUser', function () {
  return Meteor.users.find({_id: this.userId}, 
		{fields: {'profile': 1}});
});