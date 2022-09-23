
// user create ==> user update ==> user delete
describe("Create, Update and Delete User in one test case",()=>{

it("Create , update and delete user",()=>{
let token = 'c64b58b93cfa900ac14f67a15c9226d60c4bfec6b2647d7a9f4f3fb0e555a331'

cy.request({
method:"POST",
url:'https://gorest.co.in/public/v2/users',
headers:{
    Authorization:`Bearer ${token}`
},
body:{
    "name":"Vasudha Wankhade",
 "gender":"female",
  "email":`tenali.rramakrishna@${Math.floor(Math.random()*1000)}15ce.com`, 
  "status":"active"
}
}).then(function(response){
    expect(response.status).to.eq(201)
    return response.body.id
})
.then(function(userId){
    
    cy.request({
        method:"PUT",
        url:`https://gorest.co.in/public/v2/users/${userId}`,
        headers:{
            Authorization:`Bearer ${token}`
        },
        body:{
            "name":"Vasudha D Wankhade", 
"email":"abcd@gmail.com",
 "status":"active"
        }
    })
    .then(function(response){
        expect(response.status).to.eq(200)
        return userId
    })
   .then(function(userId){
    cy.request({
        method:"DELETE",
        url:`https://gorest.co.in/public/v2/users/${userId}`,
        headers:{
            Authorization:`Bearer ${token}`
        }
    }).then(function(response){
        expect(response.status).to.eq(204)
    })
   })

})






})

})