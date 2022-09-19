describe("Verify all js alerts", () => {

    beforeEach(() => { cy.visit('https://the-internet.herokuapp.com/javascript_alerts') })

    // TC 01
    it("Verify normal js alert", () => {
        cy.get('button[onclick="jsAlert()"]').click()
        cy.on('window:alert', function(str) {
            expect(str).to.eq('I am a JS Alert')
            return true
        })
        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })

    // TC 02
    it("Verify confirm alert - OK", () => {
        cy.get('button[onclick="jsConfirm()"]').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.eq('I am a JS Confirm')
            return true
        })
        cy.get('#result').should('have.text', 'You clicked: Ok')
    })

    // TC 03
    it("Verify confirm alert - Cancel", () => {
        cy.get('button[onclick="jsConfirm()"]').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.eq('I am a JS Confirm')
            return false
        })
        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })

    // TC 04
    it("Verify prompt alert - OK", () => {
        cy.window().then(function(win) {
            cy.get('button[onclick="jsPrompt()"]').click()
            cy.stub(win, 'prompt').returns('Vasudha')
        })
        cy.get('#result').should('have.text', 'You entered: Vasudha')
    })

    // TC 05
    it.only("Verify prompt alert - Cancel", () => {
        cy.window().then(function(win) {
            cy.get('button[onclick="jsPrompt()"]').click()
            cy.stub(win, 'prompt').returns(null)
        })
        cy.get('#result').should('have.text', 'You entered: null')
    })

})