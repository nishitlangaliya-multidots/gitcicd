// mytest.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/*
describe( 'Run a pull', function() {
    const baseURL = Cypress.env( "site" ).url;

    beforeEach( function() {
        cy.visit( baseURL + '/wp-login.php' );
        cy.wait( 1000 );
        cy.get( '#user_login' ).type( Cypress.env( "wp_user" ) );
        cy.get( '#user_pass' ).type( Cypress.env( "wp_pass" ) );
        cy.get( '#wp-submit' ).click();
    } );

    it( 'check checkout', function() {
        cy.visit( baseURL + '/product/single/' );
        cy.get( '.single_add_to_cart_button' ).click();
        cy.wait( 1000 );
        cy.visit( baseURL + 'cart' );
        cy.get( '.checkout-button' ).click();
        
        // Billing info
        cy.get( '#billing_first_name' ).clear().type( Cypress.env( "billing" ).billing_first_name);
        cy.get( '#billing_last_name' ).clear().type( Cypress.env( "billing" ).billing_last_name);
        cy.get('.country_to_state').select('IN',{force: true});
        cy.get('#billing_country').should('have.value', 'IN');
        cy.get( '#billing_address_2' ).clear().type( Cypress.env( "billing" ).billing_address_2);
        cy.get( '#billing_city' ).type( Cypress.env( "billing" ).billing_city);
        cy.get('#billing_state').select('GJ',{force: true})
        cy.get('#billing_state').should('have.value', 'GJ');
        cy.get( '#billing_postcode' ).clear().type( Cypress.env( "billing" ).billing_postcode);
        cy.get( '#billing_phone' ).clear().type( Cypress.env( "billing" ).billing_phone);
        cy.get( '#billing_email' ).clear().type( Cypress.env( "billing" ).billing_email);
        cy.get( '#place_order' ).click();
        
        // cy.get( '.pull-push-connection-info' ).type( Cypress.env( "site2" ).remote_connection );
        // cy.get( '.connect-button' ).click();

        //cy.wait( 2000 );

        //...More test code
        // Click the migrate button
       // cy.get( '.migrate-db-button' ).click();
    } );
} );

/*cy.visit(url[i]);
cy.get('body')
  .then(($body) => {
    let images = $body.find('img');
    if (images.length === 0) {
      cy.log('Nothing here...');
    } else {
      cy.wrap(images).each((item) => {
        cy.wrap(item).should("have.attr", "alt").then((alt) => {
            expect(alt).not.be.empty;
        });
      });
    }
  })*/
  const sslCertificate = require('get-ssl-certificate')
 
/*
  cy.visit('nodejs.org');
cy.get('nodejs.org')
  .then(($body) => {
    let images = $body.find('img');
    if (images.length === 0) {
      cy.log('Nothing here...');
    } else {
      cy.wrap(images).each((item) => {
        cy.wrap(item).should("have.attr", "alt").then((alt) => {
            expect(alt).not.be.empty;
        });
      });
    }
  })*/

  /*
  it('has a logo', function () {
    cy.log(sslCertificate);
  cy.visit('https://nodejs.org').then(function (sslCertificate) {
    console.log(sslCertificate)
    // certificate is a JavaScript object
  
    console.log(sslCertificate.issuer)
    // { C: 'GB',
    //   ST: 'Greater Manchester',
    //   L: 'Salford',
    //   O: 'COMODO CA Limited',
    //   CN: 'COMODO RSA Domain Validation Secure Server CA' }
  
    console.log(sslCertificate.valid_from)
    // 'Aug  14 00:00:00 2017 GMT'
  
    console.log(sslCertificate.valid_to)
    // 'Nov 20 23:59:59 2019 GMT'
  
    // If there was a certificate.raw attribute, then you can access certificate.pemEncoded
    console.log(sslCertificate.pemEncoded)
    // -----BEGIN CERTIFICATE-----
    // ...
    // -----END CERTIFICATE-----
  });
});*/