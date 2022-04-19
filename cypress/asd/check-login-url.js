const devsites = [
    { name: 'Dev AHS', value: 'https://dev.allalliedhealthschools.com' },
    { name: 'Dev ABS', value: 'https://dev.allbusinessschools.com' },
    { name: 'Dev APSY', value: 'https://dev.allpsychologyschools.com' },
    { name: 'Dev ANS', value: 'https://dev.allnursingschools.com' },
    { name: 'Dev AES', value: 'https://dev.alleducationschools.com' },
    { name: 'Dev ACJS', value: 'https://dev.allcriminaljusticeschools.com' },

];
devsites.forEach(devsites => {

    it("should redirect to 404", () => {
        cy.wait(2000)
        cy.request({url: devsites.value + '/wp-admin', failOnStatusCode: false}).its('status').should('equal', 404)

        // cy.request({
        //     url: devsites.value + '/wp-admin',
        //     headers: {
        //         "Content-Type": "text/html",
        //         accept: "*/*",
        //         "user-agent":
        //             "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
        //     },
        // }).then((resp) => {
        //     console.log(resp)
        //    // expect(resp.status).to.eq(301);
        // });
    });

});