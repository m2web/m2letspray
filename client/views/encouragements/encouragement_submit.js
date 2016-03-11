Template.encouragementSubmit.events({
  'submit form': function(e, template) {
    e.preventDefault();

    var $body = $(e.target).find('[name=body]');
		var theAuthor = Meteor.user().profile.name;
		var currentPrayerId = Session.get('encouragementPrayerId');
		
    var encouragement = {
		body: $body.val(),
		datePosted: new Date(),
		author: theAuthor,
		postId: currentPrayerId
    };

    Meteor.call('encouragement', encouragement, function(error, encouragementId) {
		 if (error) {
		// display the error to the user
			throwError(error.reason);
			Router.go('encouragementSubmit');
		}else{
			Router.go('prayersList');
		}	
    });
  }
});