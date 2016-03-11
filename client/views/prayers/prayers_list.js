Template.prayersList.helpers({
  prayers: function(){
		//return Prayers.find();
		return Prayers.find({}, {sort: {datePosted: -1}, limit: prayersHandle.limit()})
		},
		prayersReady: function() {
			return ! prayersHandle.loading();
		},
		allPrayersLoaded: function() {
			return ! prayersHandle.loading() && 
				Prayers.find().count() <= prayersHandle.loaded();
		}
});

Template.prayersList.events({
  'click .load-more': function(e) {
    e.preventDefault();
    prayersHandle.loadNextPage();
  }
});