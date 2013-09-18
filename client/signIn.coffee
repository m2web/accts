Template.m2SignIn.helpers
  logo: ->
    AccountsEntry.config.logo

Template.m2SignIn.events
  'submit #signIn': (event) ->
    event.preventDefault()
    Session.set('email', $('input[type="email"]').val())
    Session.set('password', $('input[type="password"]').val())

    Meteor.loginWithPassword(Session.get('email'), Session.get('password'), (error)->
      if error
        Session.set('error', error.reason)
      else
        Router.go('/')
    )
