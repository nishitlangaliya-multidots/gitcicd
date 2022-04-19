const devsites = [
    { name: 'Dev AHS', value: 'https://dev.allalliedhealthschools.com' },
    { name: 'Dev ABS', value: 'https://dev.allbusinessschools.com' },
    { name: 'Dev APSY', value: 'https://dev.allpsychologyschools.com' },
    { name: 'Dev ANS', value: 'https://dev.allnursingschools.com' },
    { name: 'Dev AES', value: 'https://dev.alleducationschools.com' },
    { name: 'Dev ACJS', value: 'https://dev.allcriminaljusticeschools.com' },

];

devsites.forEach(devsites => {
    describe("No index Check - " + devsites.name, () => {
       
            beforeEach(() => {
                cy.visit(devsites.value);
            })
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
              })
    
        it('It should check site is no indexed', function () {
               
             cy.get('meta[name="description"]').should("have.attr", "content").then((alt) => {
                expect(alt).not.be.empty;
            });
            cy.get('meta[name="robots"]').should("have.attr", "content", "noindex, nofollow");
        });

    });
});