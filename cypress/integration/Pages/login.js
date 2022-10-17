export class Login {
    elements = {
        username: '#username',
        password: '#password',
        loginBtn: 'input[name="login"]'
    }
    navigate() {
        cy.visit('https://practice.automationtesting.in/my-account/')
    }
    valid_login(user, pass) {
        cy.get(this.elements.username).type(user)
        cy.get(this.elements.password).type(pass)
        cy.get(this.elements.loginBtn).click()
            .then(function() {
                cy.get('a[href="https://practice.automationtesting.in/my-account/"]').should('contain', 'Dashboard')
            })
    }
    invalid_login(user, pass) {
        cy.get(this.elements.username).type(user)
        cy.get(this.elements.password).type(pass)
        cy.get(this.elements.loginBtn).click()
            .then(function() {
                cy.get('#page-36 > div > div.woocommerce > ul > li').should('contain', 'Error')
            })
    }
}