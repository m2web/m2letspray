Router.map(function() { 
  this.route('prayersList', {path: '/'});
  this.route('userPage', {
    path: '/prayers/:userId',
    data: function() { Session.set('currentUserId', this.params.userId); }
	});
  this.route('prayerSubmit', {path: '/submit'});
	this.route('prayerEdit', {
    path: '/prayers/:_id/edit',
    data: function() { Session.set('currentPrayerId',this.params._id); }
	});
  this.route('accessDenied');
	this.route('encouragementSubmit',{
    path: '/encouragements/encouragementSubmit/:_id',
    data: function() { Session.set('encouragementPrayerId',this.params._id); }
	});
	this.route('encouragementEdit', {
    path: '/encouragements/:_id/edit',
    data: function() { Session.set('currentEncouragementId',this.params._id); }
	});
});

Router.configure({
    layoutTemplate: 'layout',
    onBeforeAction: function() {
      //var routeName = this.context.route.name;
			var routeName = this.route.name;
      // only if attempting to submit
			if (_.include(['prayerSubmit'], routeName)){
      	if (Meteor.user()){
          this.render(page);
        } else if (Meteor.loggingIn()){
          this.render('loading');
        } else {
          Router.go('accessDenied');
        }
      }
    },
onAfterAction:  function(page) {
    clearErrors();
    //this.render(page);
  }
});

