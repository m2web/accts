Template.home.greeting = function () {
	return "Welcome to Accounts Test Page.";
}

Template.home.events({
	'click input' : function () {
	// template data, if any, is available in 'this'
	if (typeof console !== 'undefined')
	console.log("You pressed the button on the account test page.");
	}
});


Meteor.startup(function () {
	// code to run on server at startup
});

