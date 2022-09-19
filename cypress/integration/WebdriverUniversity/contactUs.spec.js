// Verify Contact Us form

describe('Verify the contact us form', function() {

    // TC-01

    it("Verify functionality of Submit button and validate Thank you message", () => {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('input[name="first_name"]').type('Vasudha')
        cy.get('input[name="last_name"]').type('Wankhade')
        cy.get('input[name="email"]').type('abcd@gmail.com')
        cy.get('textarea[name="message"]').type('Good Morning')

        cy.get('input[value="SUBMIT"]').click()
        cy.get('#contact_reply').should('contain', 'Thank You for your Message!')
    })

    // TC-02

    it("Enter wrong email and validate error message", () => {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('input[name="first_name"]').type('Vasudha')
        cy.get('input[name="last_name"]').type('Wankhade')
        cy.get('input[name="email"]').type('abcdgmail.com')
        cy.get('textarea[name="message"]').type('Good Morning')

        cy.get('input[value="SUBMIT"]').click()
        cy.get('body').should('contain', 'Error: Invalid email address')
    })


    // TC-03

    it("Leave one field blank and validate error message", () => {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('input[name="first_name"]').type('Vasudha')
            // cy.get('input[name="last_name"]').type('Wankhade')
        cy.get('input[name="email"]').type('abcdgmail.com')
        cy.get('textarea[name="message"]').type('Good Morning')

        cy.get('input[value="SUBMIT"]').click()
        cy.get('body').should('contain', 'Error: all fields are required')

    })

    // TC-04

    it("Verify the functionality of Reset button", () => {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('input[name="first_name"]').type('Vasudha')
        cy.get('input[name="last_name"]').type('Wankhade')
        cy.get('input[name="email"]').type('abcdgmail.com')
        cy.get('textarea[name="message"]').type('Good Morning')

        cy.get('input[value="RESET"]').click()

        cy.get('input[name="first_name"]').should('contain', '')
        cy.get('input[name="last_name"]').should('contain', '')
        cy.get('input[name="email"]').should('contain', '')
        cy.get('textarea[name="message"]').should('contain', '')


    })


})