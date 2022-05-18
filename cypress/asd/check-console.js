// const devsites = [
//     { name: 'Dev AHS', value: 'https://multidots.com/' },
//     // { name: 'Dev ABS', value: 'https://dev.allbusinessschools.com' },
//     // { name: 'Dev APSY', value: 'https://dev.allpsychologyschools.com' },
//     // { name: 'Dev ANS', value: 'https://dev.allnursingschools.com' },
//     // { name: 'Dev AES', value: 'https://dev.alleducationschools.com' },
//     // { name: 'Dev ACJS', value: 'https://dev.allcriminaljusticeschools.com' },

// ];


// devsites.forEach(devsites => {

//  //   describe('Check for Console Error', () => {
//         // afterEach(() => {
//         //   cy.wait(DELAY).then(() => {
//         //     expect(windowErrorSpy).to.not.be.called; 
//         //   });
//         // });
      
       
//     //   it('should spy window.error', () => {
//     //     cy.visit(devsites.value, {
//     //         // onBeforeLoad(win) {
//     //         // cy.spy(win.console, 'error').as('spyWinConsoleError');
//     //         // cy.spy(win.console, 'warn').as('spyWinConsoleWarn');
//     //         // },
//     //     })
//     //     // cy.spy(window.console, 'error').as('spyWinConsoleError');
//     //     // console.error('questo e errore')
//     //     // cy.get('@spyWinConsoleError').should('be.calledOnce');
//     //     });


//     it('should spy on RUNNER window.error', () => {
//         cy.visit(devsites.value)
//         cy.spy(window.console, 'error').as('spyWinConsoleError');
//         console.error('questo e errore')
//         cy.get('@spyWinConsoleError').should('be.calledOnce');
//       });

//       it('should spy on RUNNER window.error', () => {
//         cy.spy(window.console, 'error').as('spyWinConsoleError');
//         console.error('questo e errore')
//         cy.get('@spyWinConsoleError').should('be.calledOnce');
//       });
//       it('should spy on APP window.error', () => {
//         const win = cy.state('window')
//         cy.spy(win.console, 'error').as('spyWinConsoleError');
        
//         win.console.error('questo e errore')
//         cy.get('@spyWinConsoleError').should('be.calledOnce');
//       });it('should spy window.error', () => {
//   cy.visit(devsites.value, {
//     onBeforeLoad(win) {
//       cy.spy(win.console, 'error').as('spyWinConsoleError');
//     },
//   })
//   cy.get('@spyWinConsoleError').should('be.calledWith', 'from app');
// });
// it('should spy window.error', () => {
//     cy.visit(devsites.value, {
//       onBeforeLoad(win) {
//         cy.spy(win.console, 'error').as('spyWinConsoleError');
//       },
//     })
//     cy.get('@spyWinConsoleError').should('be.calledWith', 'from app');
//   });



// });

const devsites = [
    { name: 'Dev AHS', value: 'https://dev.allalliedhealthschools.com/' },
    { name: 'Dev ABS', value: 'https://dev.allbusinessschools.com' },
    { name: 'Dev APSY', value: 'https://dev.allpsychologyschools.com' },
    { name: 'Dev ANS', value: 'https://dev.allnursingschools.com' },
    { name: 'Dev AES', value: 'https://dev.alleducationschools.com' },
    { name: 'Dev ACJS', value: 'https://dev.allcriminaljusticeschools.com' },

];


devsites.forEach(devsites => {

/// <reference types="cypress" />
context('Console - '+devsites.name, () => {
    describe('spying on console.log', function () {
      beforeEach(function () {
        cy.visit(devsites.value, {
          onBeforeLoad (win) {
            cy.spy(win.console, 'log').as('consoleLog')
          },
        })
      })
  
      it('calls console.log with expected text', function () {
        cy.get('#logo').click()
        cy.get('@consoleLog').should('be.calledWith', 'Hello World!')
      })
    })
  
    describe('stubbing console.log', function () {
      let parameter
  
      beforeEach(() => {
        cy.visit(devsites.value, {
            onBeforeLoad (win) {
            cy.stub(win.console, 'log', (x) => {
              parameter = x
            })
          },
        })
      })
  
      it('waits until stub has been executed and we get a value', function () {
        cy.get('.logo').click()
        // We need to wait until the application calls "console.log"
        // and our local closure variable "parameter" gets a value.
        // Using "should(cb)" we force retrying the callback
        // until all assertions inside pass, see:
        // https://on.cypress.io/retry-ability
        // https://on.cypress.io/should#Function
        cy.should(() => {
          expect(parameter).to.equal('Hello World!')
        })
      })
    })
  })
})