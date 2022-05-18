describe('Main Menu', function () {
  it('works with no children', function () {
    cy.visit('http://cicd.local/');
  //  cy.get('#main-menu').happoScreenshot(); // UI test of menu in initial state
    cy.get('#main-menu li:not(.menu-item-has-children):first-child').click();
    cy.location('pathname').should('not.eq', '/')
  });

  it('works with 1 level of children', function () {
    cy.visit('http://cicd.local/');
    cy.get('#main-menu li.has-submenu-lvl-1:first-child').hover();
  //  cy.get('#main-menu').happoScreenshot(); // UI test of menu in expanded state
    cy.get('#main-menu li.has-submenu-lvl-1:first-child ul.submenu li:first').click()
    cy.location('pathname').should('not.eq', '/')
  });
});