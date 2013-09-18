Router.map(function() { 
  this.route('home', {path: '/'});
	this.route('m2SignIn', {path: '/signin', 
			onBeforeRun: function(){
				Session.set('error', undefined);
				Session.set('buttonText', 'in');
			}
		}
	);
	this.route('m2SignUp', {path: '/signup', 
			onBeforeRun: function(){
				Session.set('error', undefined);
				Session.set('buttonText', 'up');
			}
	});
	this.route('m2ForgotPassword', {path: '/forgotpassword', 
			onBeforeRun: function(){
				Session.set('error', undefined);
			}
	});
});