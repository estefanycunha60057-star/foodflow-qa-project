describe('Pagamento FoodFlow', () => {

  it('Finalizar pedido', () => {

    cy.visit('https://example.com')

    cy.contains('Finalizar Pedido')
      .click()

  })

})
