class loginLocators{
    constructor(){
        this.loginBtn = '[id="log_in"]';
        this.emailInput = '[id="username"]';
        this.continueBtn = '[class="c3768468a cd7c8bf9c c4a5884bf c127814b1 _button-login-id"]'
        this.passInput = '[id="password"]';
        this.ingresarBtn = '[class="c3768468a cd7c8bf9c c4a5884bf c127814b1 _button-login-password"]';
    }
}

export default class Login {
    constructor(){
        this.locators = new loginLocators();
    }

    getLoginBtn(){
        return cy.get(this.locators.loginBtn);
    }

    getEmailInput(){
        return cy.get(this.locators.emailInput);
    }

    getContinueBtn(){
        return cy.get(this.locators.continueBtn);
    }

    getpassInput(){
        return cy.get(this.locators.passInput);
    }

    getIngresarBtn(){
        return cy.get(this.locators.ingresarBtn);
    }
}