Template.encouragementEdit.helpers({
  comment: function() {
    return Encouragements.findOne(Session.get('currentEncouragementId'));
  }
});


Template.encouragementEdit.events({
  'submit form': function(e) {
    e.preventDefault();

		var user = Meteor.user().profile.name;
    var currentEncouragementId = Session.get('currentEncouragementId');

    var bodyText = $(e.target).find('[name=body]').val();
    if(bodyText.length == 0){
        alert("Your encouragement was blank. Please re-add the encouragement.");
        bodyText = "Your encouragement was blank. Please re-add the encouragement.";
      }
    
     var encouragementProperties = {
      body: bodyText
     }

    Encouragements.update(currentEncouragementId, {$set: encouragementProperties}, function(error) {
      if (error) {
        // display the error to the user
        alert("There was an error updating the request: " + error.reason);
      } else {
        Router.go('prayersList');
      }
    });
  },
  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this Encouragement?")) {
      var currentEncouragementId = Session.get('currentEncouragementId');			
      Encouragements.remove(currentEncouragementId);

      Router.go('prayersList');
    }
  }
});
