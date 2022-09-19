describe("Verify iframes", () => {

    // TC 01

    it("Verify iframe by jquery", () => {
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
            // cy.get('a[href="index.html"]') ==> element not found 
            // Step1 : find iframe
            // Step2 : resolve promise by .then
            // Step3 : apply contents method and obtain body from it and store it in a variable
            // Step4 : wrap that variable to convert it to cypress element
            // Step5 : Then give it alias
            // Step6 : Now we can get the required element in the iframe

        cy.get('#frame').then(function($iframe) {
            let body = $iframe.contents().find('body')
            cy.wrap(body).as('iframeBody')
            cy.get('@iframeBody').find('a[href="index.html"]').click()
        })
    })

    // TC 02

    it("Verify iframe by JavaScrript", () => {
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(function(iframe) {
            let body = iframe[0].contentDocument.body
            cy.wrap(body).as('iframeBody')
            cy.get('@iframeBody').find('a[href="index.html"]').click()
        })
    })
})