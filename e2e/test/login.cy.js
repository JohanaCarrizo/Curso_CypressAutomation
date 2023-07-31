import Login from "../../pages/login"


/// <reference types="cypress" />

describe('Logue de pagina test', () => {
    beforeEach(() => {
      
      cy.visit('https://hub.docker.com/')
    })

  
    it('Logue valido', () => {
      const login = new Login();

      login.getLoginBtn().click();
      login.getEmailInput().type("username");
      login.getContinueBtn().click();
      login.getpassInput().type("password");
      login.getIngresarBtn().click();
    })

  })    