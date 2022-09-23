
describe("Verify the gorest Apis", () => {
    let token = `c64b58b93cfa900ac14f67a15c9226d60c4bfec6b2647d7a9f4f3fb0e555a331`

   // TC 01

    it("Verify the GET api to get list of users", function () {
        cy.request({
            method: "GET",
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(function (response) {
            expect(response.body.length).to.eq(10)
            expect(response.status).to.eq(200)
        })
    })

    // TC 02

    it("Verify POST api to create new user", () => {
        cy.request({
            method: "POST",
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: {
                "name": "Tenali Ramakrishna",
                "gender": "male",
                "email": `tenali${Math.floor(Math.random() * 1000)}.rramakrishna@15ce.com`,
                "status": "active"
            }
        }).then(function (response) {
            expect(response.status).to.eq(201)

        })
    })

    // TC 03

    it.skip("Verify PUT api for update user", () => {
        cy.request({
            method: "PUT",
            url: 'https://gorest.co.in/public/v2/users/7',
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: {
                "name": "Allasani Peddana",
                "email": "aaaallasani.peddana@15ce.com",
                "status": "inactive"
            }
        }).then(function (response) {
                expect(response.status).to.eq(200)
            })
    })


it("Verify DELETE api for delete user",()=>{
    cy.request({
        method:'DELETE',
        url:'https://gorest.co.in/public/v2/users/7',
        headers:{
            Authorization:`Bearer ${token}`
        },
    
    }).then(function(response){
        cy.log(response)
    })
})
})