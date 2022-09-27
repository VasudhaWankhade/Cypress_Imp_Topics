// cy.intercept() ==> to wait till we get response of api request

describe("Verify kitchen.io api by cy.intercept",()=>{
    it("Verify GET api",()=>{
        cy.intercept({
            method:"GET",
            url:'https://jsonplaceholder.cypress.io/comments/1'
        }).as('getCmnt')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('button[class="network-btn btn btn-primary"]').click()
        cy.wait('@getCmnt')
        cy.get('div[class="network-comment"]').should('contain','laudantium enim quasi est quidem magnam voluptate ipsam eos')
    })

    it("Verify POST api",()=>{
        cy.intercept({
            method:"POST",
            url:"https://jsonplaceholder.cypress.io/comments"
        }).as('update')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('button[class="network-post btn btn-success"]').click()
        cy.wait('@update')
        cy.get('div[class="network-post-comment"]').should('contain','POST successful!')
    })
})