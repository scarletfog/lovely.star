describe('login', () => {
  before(() => {
    // intercept first login request
    cy.intercept({ method: 'POST', url: 'https://playground.tesonet.lt/v1/tokens', times: 1 }, (req) => {
      req.reply({
        statusCode: 401,
        body: {
          message: 'Unauthorized'
        }
      })
    }).as('loginRequest')
  })

  it('should login and logout', () => {

    cy.visit('/');
    cy.url().should('contain', '/login');

    const loginForm = cy.getByTestId('LoginForm');

    loginForm.within(() => {
      const loginInput = cy.get('[name="username"]');
      const passwordInput = cy.get('[name="password"]');
      const submitButton = cy.get('button[type="submit"]');


      submitButton.click();
      cy.contains('Username cannot be blank').should('be.visible')
      cy.contains('Password cannot be blank').should('be.visible')


      loginInput.type(Cypress.env('LOGIN'));
      cy.contains('Username cannot be blank').should('not.exist');

      passwordInput.type(Cypress.env('PWD'));
      cy.contains('Password cannot be blank').should('not.exist');

      // intercepted response
      submitButton.click();

      cy.wait('@loginRequest')
      cy.contains('Incorrect credentials').should('be.visible');

      // retry
      submitButton.click();
    })

    cy.url().should('not.include', '/login');

    cy.contains('Sign out').click()

    cy.url().should('include', '/login');

  })
})