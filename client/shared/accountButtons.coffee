#Handlebars.registerHelper(
#  "accountButtons", ->
#    return new Handlebars.SafeString(Template.m2AccountButtons())
#  )

Template.m2AccountButtons.events
  "click .m2-sign-out": (event) ->
    event.preventDefault()
    if AccountsEntry.config.homeRoute
      Meteor.logout()
      Router.go(AccountsEntry.config.homeRoute)
