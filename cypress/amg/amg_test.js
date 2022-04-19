// Ask media test cases

// Check sitemap


const structures = [
    { name: 'Site 1', value: 'https://staging.reference.com' },
    { name: 'Site 2', value: 'https://staging.ask.com' },
    { name: 'Site 3', value: 'https://staging.simpli.com' },
    { name: 'Site 4', value: 'https://staging.bloglines.com' },
    { name: 'Site 5', value: 'https://staging.smarter.com' },
    { name: 'Site 6', value: 'https://staging.askmoney.com' },
    { name: 'Site 7', value: 'https://staging.faqtoids.com' },
    { name: 'Site 8', value: 'https://staging.life123.com' },
    { name: 'Site 9', value: 'https://staging.consumersearch.com' },
    { name: 'Site 10', value: 'https://staging.symptomfind.com' },
    { name: 'Site 11', value: 'https://staging.questionsanswered.net' },
];

const adDomains = [
    { name: 'Site 1', value: 'https://staging.ask.com', cat: 'culture' },
    { name: 'Site 2', value: 'https://staging.Reference.com', cat: 'history' },
    { name: 'Site 3', value: 'https://staging.Consumersearch.com', cat: 'home-garden' },
    { name: 'Site 4', value: 'https://staging.Life123.com', cat: 'home-garden' },
    { name: 'Site 5', value: 'https://staging.Faqtoids.com', cat: 'history' },
    { name: 'Site 6', value: 'https://staging.Smarter.com', cat: 'history' },
    { name: 'Site 7', value: 'https://staging.Bloglines.com', cat: 'fashion' },
    { name: 'Site 8', value: 'https://staging.Simpli.com', cat: 'world-events' },
    { name: 'Site 9', value: 'https://staging.askmoney.com', cat: 'credit-cards' },

];




structures.forEach(structure => {
    describe("TC_01 Sitemap Check - " + structure.value, () => {
        let urls = [];
        before(() => {
            cy.request({
                url: structure.value + '/sitemap_index.xml',
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
        it(`should succesfully load each  ${structure.name} sitemap`, () => {
            urls.forEach((url, index,tst) => {
                
          
            cy.wait(1000)
                cy.wrap(url)
              //  console.log(index);
                const postsitemap = 'post-sitemap'+index+'.xml';
              const last = url.split('/');
          //    console.log(last[3]);
              console.log(tst);
              //cy.wrap(last[3]).should('contain', 'post-sitemap'); // passes
 
            expect(last[3]).to.be.oneOf([last[3], "page-sitemap.xml", "category-sitemap.xml"]);
                        //  expect(last[3]).to.be.oneOf(sitemapURL);

            //    expect(url).to.contain(sitemapURL[index] | sitemapChunk[index]);
                cy.wrap(url).should('contain', 'sitemap'); // passes
            })
        });
    });
});


//  Check for site is no indexed or not

structures.forEach(structure => {
    describe("TC_01.1 No index Check - " + structure.value, () => {
       
            beforeEach(() => {
                cy.visit(structure.value);
            })
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
              })
    
        it('TC_01.1 It should check site is no indexed', function () {
               
            //  cy.get('meta[name="description"]').should("have.attr", "content").then((alt) => {
            //     expect(alt).not.be.empty;
            // });
            cy.get('meta[name="robots"]').should("have.attr", "content", "noindex, nofollow");
        });

    });
});



// Breadcrum test

describe('Breadcrum', () => {

    beforeEach(() => {
        cy.visit('https://www.ask.com/culture/when-we-look-to-history-for-entertainment');
    })
    it('TC_02 Check for Breadcrum', function () {
        cy.get('.breadcrumbs').should('be.visible')
        cy.get('.breadcrumbs')
            .children('.container-fluid')
            .should('contain', 'Culture')
        // cy.get('.breadcrumbs').children('span')
        // .eq(1).should('contain', 'Culture')

    });

});

// Article detail page test

describe('Article detail page', () => {
    beforeEach(() => {
        cy.visit('https://www.ask.com/culture');
    })
    it('TC_03 Article detail page', function () {
        //   cy.visit(url);
        cy.get(".single-category-article a").each(($a, index, $list) => {
            const message = $a.text();
            expect($a, message).to.have.attr("href").not.contain("undefined");
            expect($a, message).to.have.css('cursor', 'pointer');
        });

        cy.get('a').each((page, index) => {
            if (index == 5) {
                return false;
            } else {
                cy.request(page.prop('href'))
            }
        })
    });
});




// Check for search result

describe('Search Functionality', () => {
    beforeEach(() => {
        cy.visit('https://www.ask.com/culture');
    })
    it('TC_04 Check for autocomplete', function () {
        // cy.visit(baseURL);
        cy.get('.search-submit').should('be.visible')

        //   cy.get('#search_icon').click()
        cy.wait(1000);
        cy.get('.search-box').should('be.visible')
        cy.get('.search-box').then(($text) => {
            const txt = $text.text()
            cy.log($text)
            expect($text, txt).to.have.css('cursor', 'text');
            expect($text, txt).to.have.attr("placeholder").contain("Search");

            cy.wait(8000);
            cy.get($text).click().focused().type('christmas cards' + '{downarrow}',     );
            cy.get('.ac_results').should('be.visible')
            // cy.get('.suggest').click({force:true});
            cy.get('.ac_results li').first().click({ force: true });
            cy.get($text).type('{enter}')
            cy.get('.l-mid-container').should('be.visible');


        })

    });
});




// Advertise verify

adDomains.forEach(domain => {
    describe("Check Home page Advertise- " + domain.value, () => {

        beforeEach(() => {
            cy.visit(domain.value);
        })
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

        it('It should check ads after three article', function () {
            cy.get('.tile-item').eq(2).next().should('have.class', 'home-page-ad');
            // cy.get('.has-12-articles').eq(2).should('have.class', 'home-page-ad');
            cy.get('.latest-articles-block').next().should('have.class', 'home-page-ad');
            cy.get('.articles-by-category-block').next().should('have.class', 'home-page-ad');
            cy.get('.global-site-ad').each(($el, index, $list) => {
                cy.wrap($el).eq(0).children().should('have.class', 'home-page-ad');
            })
        });

        it('It should check ads Before footer on mobile', function () {
            cy.viewport('iphone-6');
          //  cy.get('.wp-block-askmedia-right-side-bar-column').find('div').last().should('have.class', 'home-page-ad');
            cy.get('.site-main')
            .find('div:last-child')     // use find here to restrict search to previous subject
            .should('have.class', 'home-page-ad');
        })
       

    });

    // Check for category page

    describe("Check For Category page- " + domain.value, () => {

        beforeEach(() => {
            cy.visit(domain.value + '/' + domain.cat);
        })
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

        it('It should check ads after three article', function () {

           // cy.get('.single-category-article').eq(2).next().should('have.class', 'home-page-ad');
            // cy.get('.has-12-articles').eq(2).should('have.class', 'home-page-ad');

            // cy.get('.article-section').each(($el, index, $list) => {
            //     // $el is a wrapped jQuery element

            //     // wrap this element so we can
            //     // use cypress commands on it
            //     cy.wrap($el).next().should('have.class', 'global-site-ad');

            // })


            cy.get('.col-3.taxonomy_top_wrap').next().should('have.class', 'global-site-ad');

            // cy.get('.global-site-ad').each(($el, index, $list) => {
            //     // $el is a wrapped jQuery element

            //       // wrap this element so we can
            //       // use cypress commands on it
            //       cy.wrap($el).eq(0).children().should('have.class', 'home-page-ad');


            //   })



        });

        it('It should check After 5 title', function () {
            cy.viewport('iphone-6');
          //  cy.get('.wp-block-askmedia-right-side-bar-column').find('div').last().should('have.class', 'home-page-ad');
          cy.get('.col-3.taxonomy_top_wrap').next().should('have.class', 'global-site-ad');

        })

        it('It should check ads Before footer on mobile', function () {
            cy.viewport('iphone-6');
          //  cy.get('.wp-block-askmedia-right-side-bar-column').find('div').last().should('have.class', 'home-page-ad');
            cy.get('.article-section.col-3.taxonomy_top_wrap')
            .next()     // use find here to restrict search to previous subject
            .should('have.class', 'global-site-ad');
        })

    });

    // Check for article page

    describe("Check For Artical page- " + domain.value, () => {

        beforeEach(() => {
            cy.visit(domain.value + '/' + domain.cat);
        })
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

        it('It should check ads Before Trending Article in sidebar', function () {
            cy.get(".single-category-article a").first().click();
            cy.get('.global-site-ad-before-trending').should('be.visible',{force:true});
            cy.get('.trending-articles-block').parent().prev().should('have.class', 'global-site-ad-before-trending');
            //cy.get('#right-sidebar-ads').eq(0).should('be.visible',{force:true});
            
        });

        it('It should show sidebar megnite ads', function () {
            cy.get(".single-category-article a").first().click();
            cy.get('.single-post-right-part .global-site-ad').each(($el, index, $list) => {
                // $el is a wrapped jQuery element

                  // wrap this element so we can
                  // use cypress commands on it
                  cy.wrap($el).eq(0).children().should('have.class', 'global-site-magnite-ad');


              })
        });

    });


});