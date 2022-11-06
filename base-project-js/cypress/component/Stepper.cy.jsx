import Stepper from "../../src/components/Stepper"


const counterSelector = '[data-cy=counter]'
const incrementSelector = '[aria-label=increment]'
const decrementSelector = '[aria-label=decrement]'

describe('<Stepper>', () => {
    it('steppper should default to 0', () => {
        cy.mount(<Stepper />)

        cy.get(counterSelector).should('have.text','0')
    })

    it('supports an initial props to set the value',()=>{
        cy.mount(<Stepper initial={120}/>)

        cy.get(counterSelector).should('have.text','120')
    })

    it('when the increment button is pressed, the counter is incremented', () => {
        // Arrange
        cy.mount(<Stepper />)
        // Act
        cy.get(incrementSelector).click()
        // Assert
        cy.get(counterSelector).should('have.text', '1')
    })

    it('when the decrement button is pressed, the counter is decremented', () => {
        // Arrange
        cy.mount(<Stepper />)
        // Act
        cy.get(decrementSelector).click()
        // Assert
        cy.get(counterSelector).should('have.text', '-1')
    })


    it('when clicking increment and decrement buttons, the counter is changed as expected', () => {
        cy.mount(<Stepper initial={100} />)
        cy.get(counterSelector).should('have.text', '100')
        cy.get(incrementSelector).click()
        cy.get(counterSelector).should('have.text', '101')
        cy.get(decrementSelector).click().click()
        cy.get(counterSelector).should('have.text', '99')
    })

    it('clickinn + fires a change event with the incremented value',()=>{
        const onChangeSpy = cy.spy().as('onChangeSpy')

        cy.mount(<Stepper onChange={onChangeSpy}/>)

        cy.get(incrementSelector).click()

        //assert
        cy.get('@onChangeSpy').should('have.been.calledWith',1)
    })
})