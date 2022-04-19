/**
 * External dependencies
 */
 import 'cypress-xpath'
 
 const CustomerFlow = {
     login: ( siteURL,username, password ) => {
         cy.visit( siteURL )
         cy.get( '#username' ).type( username )
         cy.get( '#password' ).type( password )
         cy.get( 'button[name="login"]' ).click({ force: true })
     },
     logout: () => {
        cy.xpath( '//*[@id="wp-admin-bar-logout"]/a ').click({ force: true })
    },
    
    checksitemap: (siteURL) => {
        

    }
 
 };
 
 export { CustomerFlow };