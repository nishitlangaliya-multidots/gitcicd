// mytest.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Run a pull', function () {
    const baseURL = 'https://www.naturalhealers.com'; ///Cypress.env("site").url;

    beforeEach(function () {
        cy.viewport(1280, 720)
        cy.visit(baseURL);
        cy.wait(1000);
    });

     it('TC_01', function () {
          cy.visit(baseURL);
          cy.get('#site-footer').should('be.visible')
  
      });
  
      it('TC_04', function () {
          cy.visit(baseURL);
          cy.get('#logo').should('be.visible')
          cy.get('#search_icon').should('be.visible')
  
          cy.get('#search_icon').click()
          cy.wait(1000);
              cy.get('.search-field').should('be.visible')
              cy.wait(2000);
            cy.get('.close_search_field').click()
            
  
      });
  
      it('TC_05', function () {
          cy.visit(baseURL);
          cy.get('#logo').should('be.visible')
          cy.wait(1000)
          cy.get('#logo').trigger('mouseover')
          cy.wait(1000)
          cy.get('#logo').should('have.css', 'cursor', 'pointer')
          cy.wait(1000)
          cy.get('#logo').click().should(() => {
             // cy.get('.search-field').should('be.visible')
             cy.visit(baseURL)
            })
      }); 

     it('TC_06', function () {
 
         cy.get('.site-header .site-navigation .menu-primary-menu-container .nav>li:first').trigger('mouseover');
         ///  cy.get('.sub-menu').should('be.visible')
         // cy.get('.sub-menu').should('have.css', 'visibility', 'visible')
         cy.wait(200);
         cy.get('.site-header .site-navigation .menu-primary-menu-container .nav').should('have.css', 'opacity', '1')
         cy.wait(2000);
         cy.viewport(320, 480)
         cy.get('.mobile-menu').should('be.visible')
         cy.get('.mobile-menu').click();
         // cy.get('.search-field').should('be.visible')
         cy.get('.nav').should('have.css', 'display', 'block')
         cy.get('.mobile-menu').click();
         cy.get('.nav').should('have.css', 'display', 'none')
 
 
     });

    it('TC_09', function () {
        //   cy.visit(url);
        cy.get("a").each($a => {
            const message = $a.text();
            expect($a, message).to.have.attr("href").not.contain("undefined");
            expect($a, message).to.have.css('cursor', 'pointer');

        });
         cy.get('a').each(page => {
    cy.request(page.prop('href'))
  })
    });

    // Footer section
    it('TC_22', function () {
        cy.get('.footer-bottom').should('be.visible')
        cy.get('#menu-footer-menu>li').each(($el, index, $list) => {
      
           
            // if ($el.text() === 'Privacy Policy') {
            //     // stop iteration
            //     return false
            //   }
          //  expect($list).to.have.length(3);
          //  cy.wrap($el).find('a').click();
            // if ($index !== 1) {
            //     expect(text.trim()).to.equal('Yoga');
            //   }
        
            cy.wrap($el).find('a').should('have.attr', 'href').and('include', 'Privacy Policy')
                .then((href) => {
                cy.visit(href)
                })
            // prints "Apples"
          });
        
          
        
    });

    // Search Related checklist

    it('TC_23', function () {
        cy.visit(baseURL);
        cy.get('#search_icon').should('be.visible')

        cy.get('#search_icon').click()
        cy.wait(1000);
            cy.get('.search-field').should('be.visible')
          cy.get('.search-field').then(($text)=>{
            const txt = $text.text()
            cy.log($text)
            expect($text, txt).to.have.css('cursor', 'text');
            expect($text, txt).to.have.attr("placeholder").contain("Search");
           // cy.get( $text ).clear().type( 'Cypress.env( "billing" ).billing_postcode');
            cy.get($text)
            .clear()
            .type('2009-12-12')
            .type('{enter}')
            cy.get('.no-results').should('be.visible')

            
        })
    });

});


