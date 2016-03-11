Template.encouragement.helpers({
	submittedDate: function(){
		//lets remove the GMT and the time zone text
		d = this.datePosted;
		d = d.toString().replace(/UTC\s/,"");
		d = d.replace(/GMT.+/,"");
		return d;
	},
	ownEncouragement: function() {
		if(!Meteor.user()){
			return false;
		}
    return this.author == Meteor.user().profile.name;
  }
});