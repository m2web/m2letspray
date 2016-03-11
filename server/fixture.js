// Fixture data 
if(Prayers.find().count() === 0) {
  var now = new Date().getTime();

  // create a user with a request and encouragements
   var prayerIdMark = Prayers.insert({
			request: 'That we all be conformed into the image of Christ',
			author: 'Mark McFadden',
			datePosted: new Date(),
			userId: 'Mark.McFadden'
	});

  Encouragements.insert({
    postId: prayerIdMark,
    author: "Jim Johnson",
    datePosted: new Date(),
    body: 'Yes, Amen!'
  });

  Encouragements.insert({
    postId: prayerIdMark,
    author: "Mike Smith",
    datePosted: new Date(),
    body: 'Yeah, what you said!'
  });
}