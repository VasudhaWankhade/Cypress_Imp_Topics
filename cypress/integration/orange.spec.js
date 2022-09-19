// Verify Login functionality


describe("Verify Login functionality on Orange hrm site", () => {

    // TC-01

    it("Login with valid credentials and validate logged in url", () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('input[name="username"]').type('Admin')
        cy.get('input[type="password"').type('admin123')

        cy.get('button[type="submit"]').click()
        cy.url().should('contain', '/web/index.php/pim/viewEmployeeList')
    })


    // TC-02

    it("Validate Forgot password link and Validate message for reset password", () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('p[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]').click()
        cy.url().should('contain', 'web/index.php/auth/requestPasswordResetCode')

        cy.get('input[name="username"').type('Admin')
        cy.get('button[type="submit"]').click()

        cy.get('h6[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]').should('contain', 'Reset Password link sent successfully')

    })

    // TC-03

    it("Validate the functionality of Cancel button on Reset password page", () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode')

        cy.get('button[type="button"]').click()
        cy.url().should('contain', '/web/index.php/auth/login')
    })
})

// ATn_ryQMBB0_KcWBL23QV41n4pAhZDw1i3e9HiRTbn3maYU7o5KmNI2JpZ_KvEoCIcshPe7YU38g1ot5
// EOPYDyDxJxbPi-w-0NwGD71SlwcV5VwDw5CUkzt1szeXY1YJT8_XSpW6Iyy-bcM7nh3ebTV6yl_OLZ6g