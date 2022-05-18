
// Check for asd client widget

const devsites = [
    { name: 'Dev AHS', value: 'https://dev.allalliedhealthschools.com' },
    { name: 'Dev ABS', value: 'https://dev.allbusinessschools.com' },
    { name: 'Dev APSY', value: 'https://dev.allpsychologyschools.com' },
    { name: 'Dev ANS', value: 'https://dev.allnursingschools.com' },
    { name: 'Dev AES', value: 'https://dev.alleducationschools.com' },
    { name: 'Dev ACJS', value: 'https://dev.allcriminaljusticeschools.com' },

];
devsites.forEach(devsites => {


    describe('ASD Widget - '+devsites.name, () => {
        beforeEach(() => {

            cy.visit(devsites.value);
            cy.viewport(1600, 800)

        })
        it('Should check widget is working', function () {
            // cy.visit(baseURL);
            cy.wait(5000);
            cy.get('.asd-program-prefilter-form').should('be.visible')
    
            //   cy.get('#search_icon').click()
           
            cy.get('#asd-prefilter-postalCode').should('be.visible',{force: true })
            cy.get('#asd-prefilter-postalCode').should('be.visible')
            cy.get('#asd-prefilter-postalCode').then(($text) => {
                const txt = $text.text()
                cy.log($text)
                expect($text, txt).to.have.css('cursor', 'text',{ force: true });    
                cy.get($text).click().focused().type('92211',{ force: true });

            })
            cy.get('#asd-prefilter-hsGraduation').select('2022') 
            cy.get('#asd-prefilter-education').select('2') 
            
            // cy.get('.suggest').click({force:true});
            cy.get('#submitPrefilter').click({ force: true });
            cy.wait(5000);
            cy.get('.asd-listings').should('be.visible',{ force: true });

        });
    });
});