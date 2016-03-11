Template.user_loggedout.events({
	"click #login": function(e, tmpl){
		Meteor.loginWithFacebook({
				requestPermissions: ['publish_actions']
		}, function (err) {
			if(err) {
				//error handling
				//alert("There was an error logging in with Facebook: " + err);
			} else {
				//show an alert
				//alert('logged in');
			}
		});
	}
});

Template.user_loggedin.events({
	"click #logout": function(e, tmpl) {
		Meteor.logout(function(err) {
			if(err) {
				//show err message
				//alert("There was an error logging out with Facebook: " + err);
			} else {
				//show alert that says logged out
				//alert('logged out');
			}
		});
	}
});

Template.user_loggedin.events({
	"click #accountSettings": function(e, tmpl) {
		var userAcct = Meteor.user();
		var result = "Name: " + userAcct.profile.name;
		alert(result);
	}
});