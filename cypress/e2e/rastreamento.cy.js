describe('Rastreamento FoodFlow', () => {

  it('Rastrear pedido', () => {

    cy.visit('https://example.com')

    cy.contains('Rastreamento')
      .click()

  })

})
