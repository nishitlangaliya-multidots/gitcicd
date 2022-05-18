describe('Nav Menus', () => {

  context('iphone-5 resolution', () => {

    beforeEach(() => {
      cy.visit('https://www.naturalhealers.com/');
      cy.viewport('iphone-5')

    })

    it('displays mobile menu on click', () => {

      cy.get('nav .desktop-menu').should('not.be.visible')

      cy.get('nav .mobile-menu')

        .should('be.visible')

        .find('i.hamburger')

        .click()

      cy.get('ul.slideout-menu').should('be.visible')

    })

  })

})