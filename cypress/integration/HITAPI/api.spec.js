describe("Validate various api request", () => {
    // TC 01

    it("Verify GET Api status code", () => {
        cy.request({
            method: "GET",
            url: 'https://reqres.in/api/users?page=2'
        }).then(function(response) {
            expect(response.status).to.eq(200)
        })
    })

    // TC 02

    it("Verify POST Api status code", () => {
        cy.request({
            method: "POST",
            url: 'https://reqres.in/api/users',
            body: {
                "name": "morpheus",
                "job": "leader"
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
        })
    })

    // TC 03

    it("Verify PUT Api status code", () => {
        cy.request({
            method: "PUT",
            url: 'https://reqres.in/api/users/2',
            body: {
                "name": "morpheus",
                "job": "zion resident"
            }
        }).then(function(response) {
            expect(response.status).to.eq(200)
        })
    })

    // TC 04

    it("Verify DELETE Api status code", () => {
        cy.request({
                method: "DELETE",
                url: 'https://reqres.in/api/users/2'
            })
            .then((response) => {
                expect(response.status).to.eq(204)
            })
    })
})