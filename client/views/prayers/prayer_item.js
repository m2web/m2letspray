Template.prayerItem.helpers({
	ownPrayer: function() {
		if(!Meteor.user()){
			return false;
		}
			return this.author == Meteor.user().profile.name;
	},
	encouragements: function(){
		return Encouragements.find({postId: this._id});
	},
	encouragementCount: function(){
		return Encouragements.find({postId: this._id}).count();
	},
	encouragementCountGTZero: function(){
		return Encouragements.find({postId: this._id}).count() > 0;
	},
	encouragementCountGTOne: function(){
		return Encouragements.find({postId: this._id}).count() > 1;
	}
});
	
Template.prayerItem.events({
	'click .encourageShow': function(e) {
		e.preventDefault();
		$( "#encouragements"+ this._id ).toggle( "slow");
	}
});