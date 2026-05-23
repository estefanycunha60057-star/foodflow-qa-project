describe('Login FoodFlow', () => {

  it('Login com sucesso', () => {

    cy.visit('https://example.com')

    cy.get('#email')
      .type('teste@email.com')

    cy.get('#senha')
      .type('123456')

    cy.get('button')
      .click()

  })

})
