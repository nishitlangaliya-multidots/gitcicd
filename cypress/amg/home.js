describe( 'Home page - Backend Functional testing', function() {
  before(function () {
      cy.adminLogin( Cypress.env('WP_USERNAME'), Cypress.env('WP_PASSWORD') )
  })

  it( 'Delete Test Page', function() {
   cy.deletePost( `http://cicd.local/home-test-${Cypress.env( 'hash' )}` )
  })

  it( 'Create Page', function() {
    cy.adminLogin( Cypress.env('WP_USERNAME'), Cypress.env('WP_PASSWORD') )
    cy.createPost( 'page', `Home Test ${Cypress.env( 'hash' )}` )
    cy.publishPost( `http://cicd.local/home-test-undefined/` )
  })

  it( 'Adds content', function() {
    const last = '.wp-block:nth-last-child(2)'

    // CTA block
    cy.addBlock( 'team', 'acf-team' )
    cy.switchToEdit( last )
   //cy.get( 'p.item-title' ).type('hhh')

   
    // cy.fillACFField( last, 'columns', 'radio', 'three-col' )
     cy.fillACFField( `${last} [data-name="link"]`, 'title', 'input', 'Plant Mill Certificates' )
    // cy.fillACFField( `${last} [data-name="link"]`, 'link', 'link', { url: 'http://cicd.local', text: 'Find the Mill Certificates' } )
    // cy.fillACFField( `${last} [data-name="button"]`, 'title', 'input', 'Need more information?' )
    // cy.fillACFField( `${last} [data-name="button"]`, 'link', 'link', { url: 'http://cicd.local', text: 'Contact an advisor' } )
    // cy.fillACFField( last, 'contact', 'select', 'US HQ' )
  })

  it( 'Update Page', function() {
   // cy.updatePost()
  })
})

describe( 'Home page - Frontend Functional testing', function() {
  beforeEach( function() {
    cy.visit( `http://cicd.local/home-test-${Cypress.env( 'hash' )}` )
  })

  // it('check CTA block works', function() {
  //   cy.get('.block-call-to-action button').contains('Need more information?')
  //   cy.get('.block-call-to-action button').click()
  //   cy.url().should('eq', 'http://cicd.local')
  // })
})