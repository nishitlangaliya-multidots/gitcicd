// sample_spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/*it('has a logo', function () {
    cy.visit('https://march7.allalliedhealthschools.com')
    cy.get('img').should('have.attr', 'alt').should('not.have.value', '')
  })*/

//   context('???', () => {
//     beforeEach(() => {
//        cy.visit('https://march7.allalliedhealthschools.com/');
//  });
//  describe('???', () => {
//     it.only('???', function() {
//        cy.get('body')
//        .find('img')
//        .should('have.attr', 'alt')
//        .then(alttext => {
//           expect(alttext.length).to.be.greaterThan(1);
//        });
//        // .and('match', /.+/);
//        });
//     });
//  });
/*
 describe("Sitemap Fast Check", () => {
    let urls = [];
    before(() => {
      cy.request({
        url: "https://www.allalliedhealthschools.com/page-sitemap.xml",
        headers: {
          "user-agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
        },
      })
        .as("sitemap")
        .then((response) => {
          urls = Cypress.$(response.body)
            .find("loc")
            .toArray()
            .map((el) => el.innerText);
        });
    });
  
    it("should succesfully load each url in the sitemap", () => {
      urls.forEach((url) => {
        cy.request({
          url: url,
          headers: {
            "Content-Type": "text/html",
           
           /* "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
          },
        }).then((resp) => {
          expect(resp.status).to.eq(200);
        });
      });
    });
  });*/
//require('cypress-xpath')

//import 'cypress-axe'
/// <reference types="cypress" />
/// <reference types="cypress-xpath" />
function terminalLog(violations) {
    cy.task(
      'log',
      `${violations.length} accessibility violation${
        violations.length === 1 ? '' : 's'
      } ${violations.length === 1 ? 'was' : 'were'} detected`
    )
    // pluck specific keys to keep the table readable
    const violationData = violations.map(
      ({ id, impact, description, nodes }) => ({
        id,
        impact,
        description,
        nodes: nodes.length
      })
    )
  
    cy.task('table', violationData)
    cy.log(violationData)
  }
  /*
describe('Kushan First Test', function(){
    it('Guru 99 Login',function(){
        cy.visit('https://www.sharpservices.com/')
        cy.injectAxe()
        cy.checkA11y(null, null, terminalLog)
       
       
    })
})

describe("Sitemap Fast Check", () => {
    let urls = [];
    before(() => {
      cy.request({
        url: "https://march7.allalliedhealthschools.com/page-sitemap.xml",
        headers: {
          "user-agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
        },
      })
        .as("sitemap")
        .then((response) => {
          urls = Cypress.$(response.body)
            .find("loc")
            .toArray()
            .map((el) => el.innerText);
        });
    });
  
    it("should succesfully load each url in the sitemap", () => {
      urls.forEach((url) => {
        cy.visit(url)
       // cy.get('body').find('img').should('have.attr', 'src').should('include','pressablecdn')

        //console.log(url);
     //   cy.visit(url)
       cy.injectAxe()
      // terminalLog()
     cy.injectAxe()

      cy.checkA11y(
        {
          exclude: ['.article-action'],
        },
        {
          rules: {
            'empty-heading': { enabled: false },
            'scrollable-region-focusable': { enabled: false },
          },
        },
      )
       
      });
    });
  });
  
  */
  //import 'cypress-axe'

  // describe('My app', () => {
  //   it('should load', () => {
  //     cy.visit('https://march7.allalliedhealthschools.com/')
  //   //  cy.get('#logo').should('exist')
  //     cy.get('head').find('link').should('have.attr', 'rel').should('include','icon');

  // //    cy.screenshot({capture: 'fullPage'})
  //   })
  // })
  it("works!", () => {
    cy.visit("https://march7.allalliedhealthschools.com");
    cy.get('meta[name="description"]').should("have.attr", "content").then((alt) => {
      expect(alt).not.be.empty;
  });
  cy.get('meta[name="robots"]').should("have.attr", "content", "noindex, nofollow1");
  cy.log(null, null, terminalLog)

  
     // .should("have.attr", "content", "Here goes the description...");
});
