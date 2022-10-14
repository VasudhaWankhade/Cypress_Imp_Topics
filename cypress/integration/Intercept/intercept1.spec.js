describe("Verify xhr request for GetComment,postComment and updateComment", function() {

    // TC 01

    it.only("Verify getComment api", () => {
        cy.intercept({
            method: "GET",
            url: 'https://jsonplaceholder.cypress.io/comments/1'
        }, {
            body: {
                "postId": 1,
                "id": 1,
                "name": "id labore ex et quam laborum",
                "email": "Eliseo@gardner.biz",
                "body": "My name is Vasudha"
            }
        }).as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('button[class="network-btn btn btn-primary"]').click()
        cy.wait('@getComment').then(function({ request, response }) {
            cy.get('div[class="network-comment"]').should('have.text', response.body.body)
            expect(response.statusCode).to.eq(200)
            expect(request.method).to.eq("GET")
        })
    })

    // TC 02

    it("Verify postComment xhr request", () => {
        cy.intercept({
            method: "POST",
            url: 'https://jsonplaceholder.cypress.io/comments'
        }).as('postComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('button[class="network-post btn btn-success"]').click()
        cy.wait('@postComment').then(function({ request, response }) {
            cy.log(request)
            cy.log(response)
            expect(response.body).to.have.keys(['body', 'email', 'id', 'name'])
            expect(response.statusCode).to.eq(201)
            expect(request.method).to.eq("POST")
        })

    })

    // TC 03

    it("Verify updateComment xhr request", () => {
        cy.intercept({
            method: "PUT",
            url: 'https://jsonplaceholder.cypress.io/comments/1'
        }, {
            body: {
                "name": "Using PUT in cy.intercept()",
                "email": "hello@cypress.io",
                "body": "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE",
                "id": 100
            }
        }).as('updateComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('button[class="network-put btn btn-warning"]').click()
        cy.wait('@updateComment').then(function({ request, response }) {
            expect(request.method).to.eq("PUT")
            expect(response.statusCode).to.eq(200)

        })
    })
})