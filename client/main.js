//display 5 on load
prayersHandle = Meteor.subscribeWithPagination('prayers', 5);

Meteor.subscribe('encouragements');