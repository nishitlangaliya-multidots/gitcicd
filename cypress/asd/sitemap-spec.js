// Check Sitemap


const devsites = [
    { name: 'Dev AHS', value: 'https://dev.allalliedhealthschools.com' },
    { name: 'Dev ABS', value: 'https://dev.allbusinessschools.com' },
    { name: 'Dev APSY', value: 'https://dev.allpsychologyschools.com' },
    { name: 'Dev ANS', value: 'https://dev.allnursingschools.com' },
    { name: 'Dev AES', value: 'https://dev.alleducationschools.com' },
    { name: 'Dev ACJS', value: 'https://dev.allcriminaljusticeschools.com' },

];

// https://dev.allalliedhealthschools.com/4l8mlm3qtrzyum8s/
// https://dev.allbusinessschools.com/agtdbefaa9ywfpgr/
// https://dev.allpsychologyschools.com/x5yszk5zqba5mjry/
// https://dev.allnursingschools.com/exvrqhrph8hz3enz/
// https://dev.alleducationschools.com/dl7pg3gshhmkz47v/
// https://dev.allcriminaljusticeschools.com//a9uzfex23gchkzfu/
devsites.forEach(devsites => {
    describe("Sitemap Check - " + devsites.value, () => {
        let urls = [];
        before(() => {
            cy.request({
                url: devsites.value + '/sitemap_index.xml',
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
        it(`should succesfully load each  ${devsites.name} sitemap`, () => {
            urls.forEach((url, index, tst) => {
                
                cy.wait(1000)
                cy.wrap(url)
                const last = url.split('/');
                console.log(last[3]);
                expect(last[3]).to.be.oneOf(["post-sitemap.xml", "page-sitemap.xml"]);

            })
        });
    });
});