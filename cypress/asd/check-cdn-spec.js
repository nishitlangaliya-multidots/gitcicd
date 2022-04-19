const devsites = [
    { name: 'Dev AHS', value: 'https://dev.allalliedhealthschools.com' },
    { name: 'Dev ABS', value: 'https://dev.allbusinessschools.com' },
    { name: 'Dev APSY', value: 'https://dev.allpsychologyschools.com' },
    { name: 'Dev ANS', value: 'https://dev.allnursingschools.com' },
    { name: 'Dev AES', value: 'https://dev.alleducationschools.com' },
    { name: 'Dev ACJS', value: 'https://dev.allcriminaljusticeschools.com' },

];
devsites.forEach(devsites => {

    describe(devsites.name+ " - CDN Check", () => {
        let urls = [];
        before(() => {
            cy.request({
                url: devsites.value + "/page-sitemap.xml",
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

        it("should succesfully load images from CDN", () => {
            urls.forEach((url) => {
                cy.visit(url)
                cy.get('body').find('img').should('have.attr', 'src').should('include','pressablecdn')
            });
        });
    });

});