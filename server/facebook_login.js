ServiceConfiguration.configurations.remove({
		service: "facebook"
});

ServiceConfiguration.configurations.insert({
		service: "facebook",
		appId: Meteor.settings.facebookAppId,
		secret: Meteor.settings.facebookSecret
});
