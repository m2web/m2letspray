Template.prayerSubmit.events({
	'submit form': function(e) {
		e.preventDefault();
				
		var prayerRequest = $(e.target).find('[name=request]').val();
			
		var user = Meteor.user().profile.name;
		var theId = "";
		var prayer = {
			request: prayerRequest,
			author: user,
			datePosted: new Date(),
			userId: user.replace(/\s/g, '.')
		};
				
		
		Meteor.call('prayer', prayer, function(error, id) {
			if (error) {
				// display the error to the user
				throwError(error.reason);
				Router.go('prayerSubmit');
			}else{
				prayer._id = Prayers.insert(prayer);
				Router.go('prayersList');
			}	
		});
			
		Meteor.call('sendEmail', user);
		
	}
});
