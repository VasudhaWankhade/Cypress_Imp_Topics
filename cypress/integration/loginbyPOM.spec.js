import { Login } from '../integration/Pages/login'

describe("Validate Login functionality", () => {
    let login = new Login()
    it("Validate valid login", () => {
        login.navigate()
        login.valid_login('rani@gmail.com', 'ranirani@123')
    })
    it("Validate invalid login", function() {
        login.navigate()
        login.invalid_login('asds', 'rtdg')
    })
})