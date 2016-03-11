Template.prayerEdit.helpers({
  post: function() {
    return Prayers.findOne(Session.get('currentPrayerId'));
  }
});

Template.prayerEdit.events({
  'submit form': function(e) {
    e.preventDefault();

		var user = Meteor.user().profile.name;
    var currentPrayerId = Session.get('currentPrayerId');


    var requestText = $(e.target).find('[name=request]').val();
    if(requestText.length == 0){
        alert("Your request was blank. Please re-add a request.");
        requestText = "Your request was blank. Please re-add a request.";
      }
    
     var prayerProperties = {
      request: requestText
     }

    Prayers.update(currentPrayerId, {$set: prayerProperties}, function(error) {
      if (error) {
        // display the error to the user
        alert("There was an error updating the request: " + error.reason);
      } else {
				Meteor.call('sendEmail', user);
        Router.go('prayersList');
      }
    });
  },
  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this request?")) {
      var currentPrayerId = Session.get('currentPrayerId');			
      Prayers.remove(currentPrayerId);
			
			//lets check for any related encouragements and remove
			prayerEncouragements = Encouragements.find({postId: currentPrayerId}).fetch();
			if(prayerEncouragements.length > 0){
				for (var i=0; i <prayerEncouragements.length; i++){
					Encouragements.remove(prayerEncouragements[i]._id);
				}
			}
			
      Router.go('prayersList');
    }
  }
});
