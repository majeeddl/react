
import Button from "../../src/components/Button";

describe('Button.cy.js', () => {
  it('playground', () => {
    cy.mount(<Button />)

    cy.get('button').should('have.text', 'Button1')

  })
})
