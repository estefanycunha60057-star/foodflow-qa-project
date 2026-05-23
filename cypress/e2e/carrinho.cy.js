describe('Carrinho FoodFlow', () => {

  it('Adicionar item ao carrinho', () => {

    cy.visit('https://example.com')

    cy.contains('Pizza')
      .click()

    cy.contains('Adicionar')
      .click()

  })

})
