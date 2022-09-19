describe("Verify the gorest Apis", () => {
    let token = `c64b58b93cfa900ac14f67a15c9226d60c4bfec6b2647d7a9f4f3fb0e555a331`

    // curl -i -H "Accept:application/json" -H "Content-Type:application/json" 
    //-H "Authorization: Bearer ACCESS-TOKEN" -XGET "https://gorest.co.in/public/v2/users"
    it("Verify the GET api to get list of users", function() {
        cy.request({
            method: "GET",
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(function(response) {
            cy.log(response)
        })
    })
})