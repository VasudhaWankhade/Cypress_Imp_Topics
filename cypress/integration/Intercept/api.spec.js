///<reference types = "cypress"/>
describe("Verify kitchen.io api by cy.request", () => {
    it("Verify GET api", () => {
        cy.request({
            method: "GET",
            url: 'https://jsonplaceholder.cypress.io/comments/1'
        }).then(function (response) {
            expect(response.status).to.eq(200)
        })
    })

    it("Verify POST api", () => {
        cy.request({
            method: "POST",
            url: 'https://jsonplaceholder.cypress.io/comments',
            body: {
                "name": "Using POST in cy.intercept()",
                "email": "hello@cypress.io",
                "body": "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE"
            }
        }).then(function (response) {
            expect(response.status).to.eq(201)
        })
    })

    it("Verify PUT api", () => {
        cy.request({
            method: "PUT",
            url: "https://jsonplaceholder.cypress.io/comments/1",
            body: {
                "name": "Using POST in cy.intercept()",
                "email": "hello@cypress.io",
                "body": "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE"
            }
        }).then(function(response){
            expect(response.status).to.eq(200)
        })
    })
})