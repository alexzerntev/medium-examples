function authenticate(context) {
    var testUser = session.users().getUserByUsername(realm, "test-user");
    authenticationSession.setAuthenticatedUser(testUser);
    context.success();
}