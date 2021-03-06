
const baseURL1 = Cypress.env( "site" ).url;


describe('Command: logout', () => {
  it('Logout logged in', () => {
    cy.login();
    cy.logout();
    cy.get('#login .message').should('contain', 'You are now logged out.');
  });

  it('Logout should not fail if not logged in', () => {
    cy.logout();
    cy.visit(baseURL1);
    cy.logout();
  });
});
