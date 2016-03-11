Template.userPage.helpers({
	userPrayers : function(){
		//console.log(Session.get('currentUserId'));
		return Prayers.find({userId : Session.get('currentUserId')});
	},
	theAuthor : function(){
		var userId = Session.get('currentUserId');
		return userId.replace(/\./g, ' ');
	}
});
